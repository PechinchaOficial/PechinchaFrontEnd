import styles from './CarouselProd.module.css'
import { useRef } from 'react'
import CardProduto from '../../components/CardProduto/CardProduto';

function CarouselProd() {

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
        <section id='container'>
            <div className={styles.carousel_prod} ref={carousel}>
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </div>

            <button className={styles.btn_carousel} onClick={handleLeftClick}><i class="fa-solid fa-chevron-left" id={styles.left}></i></button>
            <button className={styles.btn_carousel} onClick={handleRightClick}><i class="fa-solid fa-chevron-right" id={styles.right}></i></button>
        </section>


    )
}

export default CarouselProd;