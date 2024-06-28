import styles from './Filter.module.css'
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer';
import CardProduto from '../../../components/CardProduto/CardProduto';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { GetProduto } from '../../../services/ProdutoService';
import localData from '../../../assets/data/localData'

function FilterProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetProduto();
            setTimeout(() => {
                setProducts(response.data.content);
                setIsLoading(false); // Adicione isso aqui para parar o carregamento após sucesso
            }, 1000);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
            setTimeout(() => {
                setProducts(localData);
                setIsLoading(false);
            }, 1000);
        }
    };

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

    const filteredProducts = products.filter((produto) =>
        produto.nome.toLowerCase().includes('snack')
    );

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    // Filtrar os produtos que contêm a palavra "Leite" no nome

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list} id='container'>

                <header className={styles.header_filter}>
                    <Link to='/listagem'> <i class="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                    <h2 className={styles.title}>Snacks</h2>

                </header>

                <div className={styles.container_prod}>
                    
                {isLoading ? (
                    Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className={styles.cardproduto}>
                            <div className={styles.container_img}>
                                <Skeleton height={200} width={200} />
                            </div>
                            <h2 className={styles.prodNome}>
                                <Skeleton width={150} />
                            </h2>
                            <div className={styles.prod_info}>
                                <span className={styles.info_prod}>
                                    <Skeleton width={100} />
                                </span>
                                <span className={styles.info_prod}>
                                    <Skeleton width={100} />
                                </span>
                            </div>
                            <div className={styles.valores}>
                                <span className={styles.preco}>
                                    <Skeleton width={50} />
                                </span>
                                <div className={styles.desconto}>
                                    <Skeleton width={70} height={70} />
                                </div>
                            </div>
                            <button className={styles.btn}>
                                <Skeleton width={270}  height={50}/>
                            </button>
                        </div>
                    ))
                ) : (
                    filteredProducts.map(({ id, nome, datavalidade, preco, desconto, fotoproduto }) => (
                        <Link key={id} to={`/produto/${id}`} className={styles.productLink}>
                            <div className={styles.cardproduto}>
                                <div className={styles.container_img} onClick={scrollToTop}>
                                    <img src={fotoproduto} alt="Produto" className={styles.imgprod} />
                                </div>
                                <h2 className={styles.prodNome}>{truncateString(nome, 15)}</h2>
                                <div className={styles.prod_info}>
                                    <span className={styles.info_prod}>
                                        Data: até {datavalidade}
                                    </span>
                                    <span className={styles.info_prod}>
                                        10 Unidades restantes
                                    </span>
                                </div>
                                <div className={styles.valores}>
                                    <span className={styles.preco}>
                                        R$ {preco}
                                    </span>
                                    <div className={styles.desconto}>
                                        <span className={styles.porcentagem}>
                                            -{desconto}
                                        </span>
                                    </div>
                                </div>
                                <Link to='/cart'>
                                    <button className={styles.btn} onClick={scrollToTop}>
                                        ADICIONAR
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    ))
                )}
                    

                </div>

            </main>
        </div>

    )
}

export default FilterProducts