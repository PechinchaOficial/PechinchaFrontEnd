import Styles from './Login.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
};
function MarketLogin() {
    return (
        <main className={Styles.new} >

            <section className={Styles.container_new} id='container-code' >

                <div className={Styles.logo}>
                    <img src={logo} alt="" />
                </div>

                <div className={Styles.forms_new} id='forms-code' >
                    <h2>Área do mercado</h2>
                    <p className={Styles.new_p}>Faça seu login para continuar</p>

                    <form action='' className={Styles.new_forms} id='code-forms' >
                        <label htmlFor="">E-mail</label>
                        <input type="password" placeholder='Digite seu Email' className={Styles.email} />

                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder='Digite sua senha' className={Styles.email} />

                        <Link to="/marketsystem" ><button onClick={scrollToTop}>ENTRAR</button></Link>

                        <p className={Styles.new_password}>Esqueceu sua senha? <Link to="/recover">Recupere aqui</Link></p>
                        <p className={Styles.new_password}>Não possui cadastro? <Link to="/registermarket">Clique aqui</Link></p>
                        
                        

                    </form>

                </div>

            </section>
        </main>
    )
}

export default MarketLogin;