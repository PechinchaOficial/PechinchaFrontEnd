import HeaderConsumer from "../../../components/HeaderConsumer/HeaderConsumer";
import Styles from './MarketPage.module.css'

function MarketPage({img, banner, adress, name, product, date, star, logo}){
    return (

        <div>
            <main>
                <section className={Styles.marketpage} id='container'>
                <div className={banner}>
                </div>
                    <div className={Styles.infosmarket}>
                            <div className={Styles.photomarket}>
                                <img className={logo} src={img} alt="Mercado logo" />
                            </div>
                            <div className={Styles.namemarket}>
                                <h1>{name}</h1>
                                <p className={Styles.adress}>{adress}</p>
                                <p className={Styles.map}>Veja no mapa</p>
                                <div className={Styles.star}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className={Styles.camps}>
                                <div className={Styles.product}>
                                    <p>{product}</p>
                                </div>
                                <div className={Styles.datestart}>
                                    <p>{date}</p>
                                </div>
                                <div className={Styles.date}>
                                    <p>{star}</p>
                                </div>
                            </div>
                        </div>
                   
                </section>
            </main>
        </div>




    )
}

export default MarketPage;