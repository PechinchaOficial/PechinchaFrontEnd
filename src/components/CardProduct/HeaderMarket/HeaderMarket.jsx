import styles from './HeaderMarket.module.css'
import logo from '../../../assets/img/marketLogo.svg'
function HeaderMarket() {
    return (
        <header className={styles.header_market}>
            <img src={logo} alt="Logo" className={styles.img_logo} />

            <div className={styles.container_icon}>
                <h4>Olá, Mercado TodoDia</h4>
                <div className={styles.icon_user}></div>
            </div>
        </header>
    )
}

export default HeaderMarket;