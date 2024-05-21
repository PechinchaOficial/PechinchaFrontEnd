import styles from './Mercados.module.css'
import mercadoLogo from '../../../assets/img/mercadodia.svg'
import CardMercado from '../../../components/CardMercado/CardMercado';

function Mercados() {
    return (
        <div id="background">
            <section className={styles.mercados} id='conteudo'>
                <div className={styles.title}>
                    <h2>Mercados Parceiros</h2>
                </div>

                <div className={styles.container_mercados}>


                    <CardMercado
                        logo={mercadoLogo} />

                    <CardMercado
                        logo={mercadoLogo} />

                    <CardMercado
                        logo={mercadoLogo} />

                    <CardMercado
                        logo={mercadoLogo} />


                    <div className={styles.card_mercado}>
                    </div>

                    <div className={styles.card_mercado}>
                    </div>

                    <div className={styles.card_mercado}>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Mercados;