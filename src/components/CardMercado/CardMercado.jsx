import styles from './CardMercado.module.css'


function CardMercado({ logo }) {
    return (
        <div className={styles.card_mercado}>
            <img src={logo} alt="" className={styles.logo_mercado} />
            <button className={styles.btn}>
                Ver Promoções
            </button>
        </div>
    )
}

export default CardMercado;