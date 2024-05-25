import styles from './MercadosRegiao.module.css'
import mercadoLogo from '../../../assets/img/mercadodia.svg'
import MercadoCard from '../MercadoCard/MercadoCard';

function MercadosRegiao() {
    return (
        <section className={styles.mercadosRegiao}>
            <div className={styles.title}>
                <i class="fa-solid fa-store"></i>
                <h2>Mercados na região</h2>
            </div>
            <div className={styles.container_card}>
                <MercadoCard
                    logo={mercadoLogo} />
                <MercadoCard
                    logo={mercadoLogo} />
                <MercadoCard
                    logo={mercadoLogo} />
                <MercadoCard
                    logo={mercadoLogo} />

            </div>
        </section>
    )
}

export default MercadosRegiao;