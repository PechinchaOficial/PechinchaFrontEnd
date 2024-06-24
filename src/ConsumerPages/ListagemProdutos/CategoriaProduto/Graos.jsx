import CardProduto from '../../../components/CardProduto/CardProduto';
import styles from './CategoriaProduto.module.css'
import { useRef } from 'react'
import graosData from '../../../assets/data/graosData'
import { useEffect, useState } from 'react';
import { GetProduto } from '../../../services/ProdutoService';

function Graos({ categoria }) {

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }


    const [products, setproducts] = useState([]);

    useEffect(() => {
        FetchProducts()
    }, [])

    const FetchProducts = async () => {
        try {
            const response = await GetProduto();
            setproducts(response.data)
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
        }
    };

    return (
        <section className={styles.categoria_produto} id='container'>
            <div className={styles.title}>
                <div className={styles.categoria}>
                    <i class="fa-solid fa-store"></i>
                    <h2>{categoria}</h2>
                </div>

                <button className={styles.btn_show_more}>
                    MOSTRAR MAIS
                </button>
            </div>

            <div className={styles.carousel_prod} ref={carousel}>
                {graosData.map(({ name, id, qtdUnit, discount, price, dateVenc, img }) => (
                    <CardProduto key={id}
                        name={name}
                        img={img}
                        qtdUnit={qtdUnit}
                        price={price}
                        discount={discount}
                        dateVenc={dateVenc} />
                )


                )}
            </div>

            <button className={styles.btn_carousel} onClick={handleLeftClick} id={styles.left}><i class="fa-solid fa-chevron-left" ></i></button>
            <button className={styles.btn_carousel} onClick={handleRightClick} id={styles.right}><i class="fa-solid fa-chevron-right" ></i></button>


        </section>
    )
}

export default Graos;