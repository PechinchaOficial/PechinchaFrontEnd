import  './Login.css';

function Login() {
    return (
        <main className='conteudo'>
            <h1>Login</h1>
            <section>
                    <div  className='forms-register'>
                        <h2>Entre com a sua conta</h2>
                        <h3>Preencha todos os campos</h3>

                            <form action="" className='forms-login'>
                                <label htmlFor="">Email</label>
                                <input type="text"  placeholder='Digite seu Email'/>

                                <label htmlFor="">Senha</label>
                                <input type="text" placeholder='Digite sua senha' />

                                <label htmlFor="">Confirmar sua senha</label>
                                <input type="text" placeholder='Digite sua senha' />

                                <p>Esqueceu sua senha? <a href="#">Recupere aqui</a></p>

                                <button>ENTRAR</button>

                            </form>

                            <p>Ao continuar com o acesso você concorda com a nossa <a href="#">politica de privacidade</a></p>

                    </div>


                    <div className='banner-login'>
                            <h2 className='title-banner-login'>
                                Bem vindo de volta! 
                            </h2>
                            <p>Clique abaixo caso ainda não tenha uma conta e aproveite de todas as funções</p>

                            <button>
                                    CADASTRAR
                            </button>
                    </div>
            </section>
        </main>
    )
}

export default Login;