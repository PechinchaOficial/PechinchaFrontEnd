import styles from './Mercados.module.css'
import mercadoLogo from '../../../assets/img/mercadodia.svg'
import TituloFormato from '../../../components/TituloFormato/TituloFormato';


function Mercados() {


    return (
        <div id="background">
            <section className={styles.mercados} id='container'>

                <TituloFormato
                    categoria='Ja trabalham conosco' />

                <div className={styles.container_mercados}>

                    <div className={styles.card_mercado}>
                        <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                        <button className={styles.btn}>
                            Ver Promoções
                        </button>
                    </div>

                    <div className={styles.card_mercado} id={styles.marketTwo}>
                        <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                        <button className={styles.btn}>
                            Ver Promoções
                        </button>
                    </div>

                    <div className={styles.card_mercado} id={styles.marketThree}>
                        <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                        <button className={styles.btn}>
                            Ver Promoções
                        </button>
                    </div>

                    <div className={styles.card_mercado} id={styles.marketTwo}>
                        <img src={mercadoLogo} alt="Logo Mercado" className={styles.logo_mercado} />
                        <button className={styles.btn}>
                            Ver Promoções
                        </button>
                    </div>

                </div>

                

            </section>
        </div>
    )
}

export default Mercados;