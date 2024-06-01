import styles from './Promocao.module.css'
import Banner from '../../../components/Banner/Banner';
import imgBanner from '../../../assets/img/banner1.svg';
import CardProduto from '../../../components/CardProduto/CardProduto';
import { useRef } from 'react'

function Promotion() {
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
        <section className="background">

            {/* Container */}
            <div className={styles.container_promotion} id="container">

                {/* Banner de promoções */}
                <Banner bannerimg={imgBanner} />

                {/* Carrossel de produtos */}
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
               
            </div>
        </section>
    )
}

export default Promotion;