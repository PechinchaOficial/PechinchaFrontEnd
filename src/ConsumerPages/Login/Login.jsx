import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <main className=' background_login' >
            <section className='container-login'>
                <div className='forms-register'>
                    <h2 className='Title-login'>Entre com a sua conta</h2>
                    <h3 className='SubTitle-login'>Preencha todos os campos</h3>

                    <form action="" className='forms-login'>
                        <label htmlFor="" className='Label-login'>Email</label>
                        <input type="text" placeholder='Digite seu Email' />

                        <label htmlFor="" className='Label-login'>Senha</label>
                        <input type="text" placeholder='Digite sua senha' />

                        <label htmlFor="" className='Label-login'>Confirmar sua senha</label>
                        <input type="text" placeholder='Digite sua senha' />

                        <p className='recover-password'>Esqueceu sua senha? <Link to="/recover">Recupere aqui</Link></p>

                        <Link to="/listagem"> <button>ENTRAR</button></Link>

                        <p className='privacy-policy'>Ao continuar com o acesso você concorda com a nossa <a href="#">politica de privacidade</a></p>

                    </form>



                </div>


                <div className='banner-login'>
                    <h2 className='title-banner-login'>
                        Bem vindo de volta!
                    </h2>
                    <p className='text-banner'>Clique abaixo caso ainda não tenha uma conta e aproveite de todas as funções</p>

                    <a href="">
                        <Link to="/registerclient">
                            <button>
                                CADASTRAR
                            </button>
                        </Link>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Login;