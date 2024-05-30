import styles from './MercadoCard.module.css'

function MercadoCard({ logo }) {
    return (
        <div className={styles.marketCard}>
            <div className={styles.container_img}>
                <img src={logo} alt="" className={styles.img} />
            </div>
            <div className={styles.mercado_info}>
                <div className={styles.info}>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Barro Ariston Estela Azevedo, 762</p>
                </div>
                <div className={styles.info}>
                    <p>4,9</p>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <i class="fa-solid fa-star" id={styles.star}></i>
                    <p>(123)</p>
                </div>
            </div>
        </div>
    )
}

export default MercadoCard;