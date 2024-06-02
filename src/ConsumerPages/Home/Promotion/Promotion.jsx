import styles from './Promocao.module.css'
import Banner from '../../../components/Banner/Banner';
import imgBanner from '../../../assets/img/banner1.svg';
import CarouselProd from '../../../components/CarouselProd/CarouselProd';

function Promotion() {

    return (
        <section className="background">
            <div className={styles.container_promotion} id="container">   {/* Container */}
                <Banner bannerimg={imgBanner} /> {/* Banner de promoções */}
                <CarouselProd />    {/* Carrossel de produtos */}
            </div>
        </section>
    )
}

export default Promotion;