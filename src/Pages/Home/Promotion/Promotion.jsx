import styles from './Promocao.module.css'
import Banner from '../../../components/Banner/Banner';
import imgBanner from '../../../assets/img/banner1.svg';
import CardProduto from '../../../components/CardProduto/CardProduto';

function Promotion() {
    return (
        <section className="background">
            <div className="conteudo">
                <Banner 
                bannerimg={imgBanner}/>
                <div className={styles.carousel_prod}>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    <CardProduto/>
                    


                </div>
            </div>
        </section>
    )
}

export default Promotion;