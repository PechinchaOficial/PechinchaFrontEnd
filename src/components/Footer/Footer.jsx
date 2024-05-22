import styles from './Footer.module.css'
import logo from '../../assets/img/logo.svg'

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footer_content}>

                <div className={styles.logo_footer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                        <button className={styles.btn}>CONHECER</button>
                </div>
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
                        <li className={styles.footer_item}><a href="#">Parcerias</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;