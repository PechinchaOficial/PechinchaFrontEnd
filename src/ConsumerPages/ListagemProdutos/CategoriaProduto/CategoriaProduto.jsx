import CardProduto from '../../../components/CardProduto/CardProduto';
import styles from './CategoriaProduto.module.css'
import { useRef } from 'react'
import snacksData from '../../../assets/data/snacksData'

function CategoriaProduto({ categoria }) {

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }


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
                {snacksData.map(({ name, id, qtdUnit, discount, price, dateVenc, img }) => (
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

export default CategoriaProduto;