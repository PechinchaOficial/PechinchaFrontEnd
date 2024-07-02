import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../components/ModalTerms/Modal';
import axios from 'axios';
import { baseURL } from '../../shared';

function Login() {
    const [openModal, setOpenModal] = useState(false);
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        setOpenModal(true);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/login`, {
                login,
                senha
            });

            // Armazenar o token no localStorage
            console.log(response);
            localStorage.setItem('token', response.headers.authorization);
            setError(''); // Limpar mensagem de erro caso o login seja bem-sucedido

            // Definir a mensagem de boas-vindas e exibir o pop-up
            setWelcomeMessage(`Bem vindo de volta, ${login}`);
            
            // Redirecionar para a página de listagem após 3 segundos
            setTimeout(() => {
                setWelcomeMessage('');
                navigate('/listagem');
            }, 2000);
        } catch (error) {
            console.error('Erro ao fazer login', error);
            setError('Login ou senha incorretos.'); // Definir mensagem de erro
        }
    };

    return (
        <main className='background_login'>
            {welcomeMessage && (
                <div className="welcome-popup">
                    {welcomeMessage}
                </div>
            )}

       {/*Div Container do formulario de login */}
            <div className='container-login'>  
                <div className='forms-register'>

                    {/* Titulos do formulario de login */}
                    <h2 className='Title-login'>Entre com a sua conta</h2>
                    <h3 className='SubTitle-login'>Preencha todos os campos</h3>


                    {/* inicio do formulario de login */}
                    <form onSubmit={handleLogin} className='forms-login'>
                        <label className='Label-login'>Email</label>
                        <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder='Digite seu Email' /> {/*Input com o email do usuario */}

                        <label className='Label-login'>Senha</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Digite sua senha' />{/*Input com a senha do usuario */}

                        {error && <p className='error-message' id='error'>{error}</p>} {/* Mostrar mensagem de erro se houver */}

                        <p className='recover-password'>Esqueceu sua senha? <Link to="/recover">Recupere aqui</Link></p>

                        <button type='submit'>ENTRAR</button>
                        <Link to="/registerclient">
                            <button type='button' className='register-client'>CADASTRAR</button>                                                        
                                {/*Botao de cadastro, esse botao so aparece quando a tela    está responsiva para celular, mas para computador está com um display none */}
                        </Link>

                        <p className='privacy-policy'>Ao continuar com o acesso você concorda com a nossa <a href="#">política de privacidade</a></p>
                    </form>
                    {/* Fim do formulario de login */}

                </div>

                
                {/* Banner lateral da tela de login do usuario */}
                <div className='banner-login'>
                    <h2 className='title-banner-login'>Bem vindo de volta!</h2>
                    <p className='text-banner'>Clique abaixo caso ainda não tenha uma conta e aproveite de todas as funções</p>

                    <Link to="/registerclient">
                        <button>CADASTRAR</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Login;
