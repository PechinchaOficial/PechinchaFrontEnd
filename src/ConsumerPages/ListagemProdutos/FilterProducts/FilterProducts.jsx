import Banner from '../../../components/Banner/Banner'
import styles from './Filter.module.css'
import imgBanner from '../../../assets/img/banner1.svg';
import MercadosRegiao from '../MercadosRegiao/MercadosRegiao';
import CategoriaProduto from '../CategoriaProduto/CategoriaProduto';
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer';
import snacksData from '../../../assets/data/snacksData'
import CardProduto from '../../../components/CardProduto/CardProduto';
import Graos from '../CategoriaProduto/Graos';
import Produtos from '../../../assets/data/bebidasData';
import React, { useRef, useEffect, useState } from 'react';
import { GetProduto } from '../../../services/ProdutoService';
import localData from '../../../assets/data/localData'
import { useCart } from '../../../ConsumerPages/Cart/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';



function FilterProducts() {
    const [products, setProducts] = useState([]);
    const carousel = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
        scrollToTop()
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try {
            const response = await GetProduto();

            setProducts(response.data.content);
            setIsLoading(false);

        } catch (error) {
            console.error("Erro ao buscar produtos", error);

            setProducts(localData);
            setIsLoading(false);

        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

    // Filtrar os produtos que contêm a palavra "Leite" no nome

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list} id='container'>

                <header className={styles.header_filter}>
                    <Link to='/listagem'> <i class="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                    <h2 className={styles.title}>Todos os produtos</h2>

                </header>
                <div className={styles.carousel_prod}>
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
                                    <Skeleton width={270} height={50} />
                                </button>
                            </div>
                        ))
                    ) : (
                        products.map(({ id, nome, datavalidade, preco, desconto, fotoproduto }) => (

                            <div key={id} className={styles.productLink}>
                                <div className={styles.cardproduto}>
                                    <Link key={id} to={`/produto/${id}`} className={styles.productLink}>
                                        <div className={styles.container_img} onClick={scrollToTop}>
                                            <img src={fotoproduto} alt="Produto" className={styles.imgprod} />
                                        </div>
                                    </Link>
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

                                    <Link key={id} to={`/produto/${id}`} >
                                        <button className={styles.btn} onClick={() => handleAddToCart({
                                            id,
                                            nome,
                                            datavalidade,
                                            preco,
                                            desconto,
                                            fotoproduto
                                        })}>
                                            COMPRAR
                                        </button>
                                    </Link>

                                </div>
                            </div>

                        ))
                    )}
                </div>

            </main>
        </div>

    )
}

export default FilterProducts