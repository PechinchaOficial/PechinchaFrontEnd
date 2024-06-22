import styles from './Footer.module.css'
import logo from '../../assets/img/logo.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import tiktok from '../../assets/img/tik-tok.svg'

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <img src={logo} alt="Logo" className={styles.logo} />

            </div>
            <div className={styles.footer_content}>

                <div className={styles.footer_item}>
                    <h3 className={styles.title}> Institucional</h3>
                    <ul className={styles.footer_link}>
                        <li className={styles.footer_item}><a href="#">Política de privacidade</a></li>
                        <li className={styles.footer_item}><a href="#">Política de privacidade</a></li>
                        <li className={styles.footer_item}><a href="#">Onde estamos</a></li>
                        <li className={styles.footer_item}><a href="#">Como funciona?</a></li>
                        <li className={styles.footer_item}><a href="#">Trabalhe conosco</a></li>
                        <li className={styles.footer_item}><a href="#">Acessibilidade</a></li>


                    </ul>
                </div>

                <div className={styles.footer_item}>
                    <h3 className={styles.title}> Sou Cliente</h3>
                    <ul className={styles.footer_link}>
                        <li className={styles.footer_item}><a href="#">Cadastre-se</a></li>
                        <li className={styles.footer_item}><a href="#">Login</a></li>
                        <li className={styles.footer_item}><a href="#">Nossos produtos</a></li>
                        <li className={styles.footer_item}><a href="#">Mercados na região</a></li>
                        <li className={styles.footer_item}><a href="#">Categorias</a></li>

                    </ul>
                </div>

                <div className={styles.footer_item}>
                    <h3 className={styles.title}> Sou Mercado</h3>
                    <ul className={styles.footer_link}>
                        <li className={styles.footer_item}><a href="#">Faça parte</a></li>
                        <li className={styles.footer_item}><a href="#">Login</a></li>
                        <li className={styles.footer_item}><a href="#">Nossos Planos</a></li>
                        <li className={styles.footer_item}><Link to="/homedeslogado">Parcerias</Link></li>
                    </ul>
                </div>

                <div className={styles.social}>
                <h2 className={styles.title}>Redes Sociais</h2>
                <div className={styles.social_icons}>
                    <img src={tiktok} className={styles.icon} alt="Tik tok" />
                    <img src={instagram} className={styles.icon} alt="Instagram" />
                    <img src={linkedin} className={styles.icon} alt="LinkedIn" />
                </div>
                </div>

            </div>

            <div className={styles.copyright}>
                <h2>Copyright ©️ 2024, Pechincha</h2>
            </div>


        </footer>
    )
}

export default Footer;