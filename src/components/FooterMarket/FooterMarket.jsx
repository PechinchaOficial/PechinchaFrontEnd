import styles from './FooterMarket.module.css'
import logo from '../../assets/img/logo.svg'

function FooterMarket(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
        <div className={styles.image_footerMarket}>
                <img src={logo} alt="" />
        </div>

            <div className={styles.footer_lists}>

            <div className={styles.footerMarket_content}>
                <h3 className={styles.title_FooterMaarket}>Sou Mercado</h3>

                <ul className={styles.footerMarket_content}>
                    <li className={styles.footerMarket_item}>Faça parte</li>
                    <li className={styles.footerMarket_item}>Login</li>
                    <li className={styles.footerMarket_item}>Nossos Planos</li>
                    <li className={styles.footerMarket_item}>Parcerias</li>

                </ul> 
            </div>

            <div className={styles.footerMarket_content}>
                <h3 className={styles.title_FooterMaarket}>Funções</h3>

                <ul className={styles.footerMarket_content}>
                    <li className={styles.footerMarket_item}>Cadastrar produtos</li>
                    <li className={styles.footerMarket_item}>Analise de dados</li>
                    <li className={styles.footerMarket_item}>Suporte online</li>
                    <li className={styles.footerMarket_item}>Feedback dis clientes</li>
                    <li className={styles.footerMarket_item}>Promoções personalizadas</li>
                </ul>
            </div>

            <div className={styles.footerMarket_content}>
                <h3 className={styles.title_FooterMaarket}>Institucional</h3>

                <ul className={styles.footerMarket_content}>
                    <li className={styles.footerMarket_item}>Politica de privacidade</li>
                    <li className={styles.footerMarket_item}>Quem somos</li>
                    <li className={styles.footerMarket_item}>Onde estamos</li>
                    <li className={styles.footerMarket_item}>Como funciona</li>
                    <li className={styles.footerMarket_item}>Trabalhe conosco</li>
                    <li className={styles.footerMarket_item}>Acessibilidade</li>
                </ul>

            </div>
         </div>
     </div>
     <div className={styles.copyright_Market}>
        <h2>Copyright ©️ 2024, Pechincha</h2>
     </div>
 </footer>
    )
}

export default FooterMarket