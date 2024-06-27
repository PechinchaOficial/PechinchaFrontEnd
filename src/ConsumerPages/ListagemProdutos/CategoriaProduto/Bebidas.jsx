import React, { useRef, useEffect, useState } from 'react';
import CardProduto from '../../../components/CardProduto/CardProduto';
import styles from './CategoriaProduto.module.css';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import { GetProduto } from '../../../services/ProdutoService';

function Graos({ categoria }) {
    const carousel = useRef(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetProduto();
            setProducts(response.data.content);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
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

    // Filtrar os produtos que contêm a palavra "Leite" no nome
    const filteredProducts = products.filter((produto) =>
        produto.nome.toLowerCase().includes('bebida')
    );

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
                {filteredProducts.map(({ id, nome, datavalidade, preco, desconto, fotoproduto }) => (
                    <Link key={id} to={`/produto/${id}`} className={styles.productLink}>
                        <CardProduto
                            name={nome}
                            dateVenc={datavalidade}
                            price={preco}
                            discount={desconto}
                            img={fotoproduto}
                        />
                    </Link>
                ))}
            </div>

            <button className={styles.btn_carousel} onClick={handleLeftClick} id={styles.left}><i className="fa-solid fa-chevron-left"></i></button>
            <button className={styles.btn_carousel} onClick={handleRightClick} id={styles.right}><i className="fa-solid fa-chevron-right"></i></button>
        </section>
    );
}

export default Graos;
