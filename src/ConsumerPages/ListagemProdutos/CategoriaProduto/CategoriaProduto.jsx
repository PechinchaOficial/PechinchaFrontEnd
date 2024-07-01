import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CardProduto from '../../../components/CardProduto/CardProduto';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './CategoriaProduto.module.css';
import { GetProduto } from '../../../services/ProdutoService';
import localData from '../../../assets/data/localData';
import { useCart } from '../../../ConsumerPages/Cart/CartContext';

function Graos({ categoria, category }) {
    const carousel = useRef(null);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetProduto();
            setTimeout(() => {
                setProducts(response.data.content);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
            setTimeout(() => {
                setProducts(localData);
                setIsLoading(false);
            }, 100);
        }
    };

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    const filteredProducts = products.filter((produto) =>
        produto.nome.toLowerCase().includes(category ? category.toLowerCase() : '')
    );

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

    return (
        <section className={styles.categoria_produto} id='container'>
            <div className={styles.title}>
                <div className={styles.categoria}>
                    <i className="fa-solid fa-store"></i>
                    <h2>{categoria}</h2>
                </div>

                <Link to='/filterproducts'>
                    <button className={styles.btn_show_more}>
                        MOSTRAR MAIS
                    </button>
                </Link>
            </div>

            <div className={styles.carousel_prod} ref={carousel}>
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
                    filteredProducts.map(({ id, nome, datavalidade, preco, desconto, fotoproduto }) => (
                       
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
                                <button className={styles.btn} onClick={() => handleAddToCart({
                                    id,
                                    nome,
                                    datavalidade,
                                    preco,
                                    desconto,
                                    fotoproduto
                                })}>
                                    ADICIONAR
                                </button>
                            </div>
                        </div>
                       
                    ))
                )}
            </div>

            <button className={styles.btn_carousel} onClick={handleLeftClick} id={styles.left}><i className="fa-solid fa-chevron-left"></i></button>
            <button className={styles.btn_carousel} onClick={handleRightClick} id={styles.right}><i className="fa-solid fa-chevron-right"></i></button>
        </section>
    );
}

export default Graos;
