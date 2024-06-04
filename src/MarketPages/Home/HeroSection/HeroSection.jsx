import Styles from './HeroSection.module.css'
import Bannerz from '../../../assets/img/HeroMercado1.svg'

function HeroMarket() {
    return(
        <section className={Styles.Background} id='container'>
            <article className={Styles.Hero}>
                <div className={Styles.Banner}>
                    <img src={Bannerz} alt=""  className={Styles.Bannerz}/>
                </div>
            </article>
            <article className={Styles.BodySect}>
                <div className={Styles.Backtext}>
                <p>Divulgue os produtos do seu mercado <br/> que não venderam e reduza o prejuizo.</p>
                </div>
                <div className={Styles.BackBtns}>
                    <button className={Styles.Btn} id={Styles.RegisterBtn}><p>CADASTRAR MERCADO</p></button>
                    <button className={Styles.Btn} id={Styles.KnowMoreBtn}><p>SAIBA MAIS</p></button>
                </div>
            </article>
        </section>
    )
}

export default HeroMarket;