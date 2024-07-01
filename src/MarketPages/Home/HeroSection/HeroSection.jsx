import Styles from './HeroSection.module.css'
import Hero from './Hero/Hero';
import { Link } from 'react-router-dom';

function HeroMarket() {
    return(
        <section className={Styles.Background} id='container'>
            <article className={Styles.Hero}>
                <div className={Styles.Banner}>
                    <Hero />
                </div> 
            </article>
            <article className={Styles.BodySect}>
                <div className={Styles.Backtext}>
                <p>Divulgue os produtos do seu mercado <br/> que não venderam e reduza o prejuizo.</p>
                </div>
                <div className={Styles.BackBtns}>
                    <button className={Styles.Btn} id={Styles.RegisterBtn}><Link  className={Styles.link} to="/registerMarket"><p>CADASTRAR MERCADO</p></Link></button>
                <button className={Styles.Btn} id={Styles.KnowMoreBtn}><p>SAIBA MAIS</p></button>
                </div>
            </article>
        </section>
    )
}

export default HeroMarket;