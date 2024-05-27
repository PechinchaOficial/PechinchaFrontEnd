import styles from './CardMercado.module.css'


function CardMercado({ logo, estilo }) {
    return (
        <div className={styles.card_mercado} id={estilo}>
            <img src={logo} alt="" className={styles.logo_mercado} />
            <button className={styles.btn}>
                Ver Promoções
            </button>
        </div>
    )
}

export default CardMercado;