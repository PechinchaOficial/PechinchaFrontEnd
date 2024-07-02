import styles from './HeaderMarket.module.css'
import logo from '../../../assets/img/logocorreta.svg'
function HeaderMarket() {
    return (
// Define o componente de cabeçalho
<header className={styles.header_market}>
    {/* Exibe o logo da marca */}
    <img src={logo} alt="Logo" className={styles.img_logo} />

    {/* Contêiner para o ícone e saudação do usuário */}
    <div className={styles.container_icon}>
        {/* Saudação ao usuário */}
        <h4>Olá, Mercado TodoDia</h4>
        {/* Ícone do usuário */}
        <div className={styles.icon_user}></div>
    </div>
</header>

    )
}

export default HeaderMarket;