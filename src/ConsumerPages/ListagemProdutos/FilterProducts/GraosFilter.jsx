import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import localData from '../../../assets/data/localData';
import styles from './Filter.module.css';
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer';

function FilterProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Simulando um delay de carregamento para efeito visual
            setTimeout(() => {
                setProducts(localData);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
            setIsLoading(false);
        }
    };

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    // Filtrar os produtos que contêm a palavra "grão" no nome
    const filteredProducts = products.filter((produto) =>
        produto.nome.toLowerCase().includes('grão')
    );

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list} id='container'>
                <header className={styles.header_filter}>
                    <Link to='/listagem'><i className="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                    <h2 className={styles.title}>Grãos</h2>
                </header>

                <div className={styles.container_prod}>
                    {isLoading ? (
                        // Renderiza o esqueleto enquanto os dados estão sendo carregados
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
                                    <Skeleton width={270} height={50} />
                                </button>
                            </div>
                        ))
                    ) : (
                        // Renderiza os produtos filtrados
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
    );
}

export default FilterProducts;
