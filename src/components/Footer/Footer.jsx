import styles from './Footer.module.css'
import logo from '../../assets/img/logo.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import tiktok from '../../assets/img/tik-tok.svg'

import { Link } from 'react-router-dom'

function Footer() {
    return (
 // Rodapé do site
<footer className={styles.footer}>
    <div className={styles.footer_content}>
        {/* Logotipo do site */}
        <img src={logo} alt="Logo" className={styles.logo} />
    </div>

    <div className={styles.footer_content}>
        {/* Seção Institucional */}
        <div className={styles.footer_item}>
            <h3 className={styles.title}>Institucional</h3>
            <ul className={styles.footer_link}>
                <li className={styles.footer_item}><Link to="/">Política de privacidade</Link></li>
                <li className={styles.footer_item}><Link to="/about">Quem somos</Link></li>
                <li className={styles.footer_item}><Link to="/about">Onde estamos</Link></li>
                <li className={styles.footer_item}><Link to="/">Como funciona?</Link></li>
                <li className={styles.footer_item}><Link to="/">Trabalhe conosco</Link></li>
                <li className={styles.footer_item}><Link to="/">Acessibilidade</Link></li>
            </ul>
        </div>

        {/* Seção para Clientes */}
        <div className={styles.footer_item}>
            <h3 className={styles.title}>Sou Cliente</h3>
            <ul className={styles.footer_link}>
                <li className={styles.footer_item}><Link to="/registerclient">Cadastre-se</Link></li>
                <li className={styles.footer_item}><Link to="/login">Login</Link></li>
                <li className={styles.footer_item}><Link to="/listagem">Nossos produtos</Link></li>
                <li className={styles.footer_item}><Link to="/listagem">Mercados na região</Link></li>
                <li className={styles.footer_item}><Link to="/">Categorias</Link></li>
            </ul>
        </div>

        {/* Seção para Mercados */}
        <div className={styles.footer_item}>
            <h3 className={styles.title}>Sou Mercado</h3>
            <ul className={styles.footer_link}>
                <li className={styles.footer_item}><Link to="/registermarket">Faça parte</Link></li>
                <li className={styles.footer_item}><Link to="/marketlogin">Login</Link></li>
                <li className={styles.footer_item}><Link to="/homemarketdeslogado">Nossos Planos</Link></li>
                <li className={styles.footer_item}><Link to="/homemarket">Parcerias</Link></li>
            </ul>
        </div>

        {/* Seção de Redes Sociais */}
        <div className={styles.social}>
            <h2 className={styles.title}>Redes Sociais</h2>
            <div className={styles.social_icons}>
                <a href="https://www.tiktok.com/@pechinchaoficial" target="_blank" rel="external"><img src={tiktok} className={styles.icon} alt="Tik tok" /></a>
                <a href="https://www.instagram.com/ospechincha.ofc/" target="_blank" rel="external"><img src={instagram} className={styles.icon} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/company/pechincha/" target="_blank" rel="external"><img src={linkedin} className={styles.icon} alt="Linkedin" /></a>
            </div>
        </div>
    </div>

    {/* Seção de Direitos Autorais */}
    <div className={styles.copyright}>
        <h2>Copyright ©️ 2024, Pechincha</h2>
    </div>
</footer>

    )
}

export default Footer;