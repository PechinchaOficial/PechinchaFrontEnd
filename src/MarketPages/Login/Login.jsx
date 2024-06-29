import Styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import { createUser } from '../../services/UsuarioService'; // Assumindo que haverá um serviço `createUser` para criar usuários
import React, { useState } from 'react';
import axios from 'axios';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
};


function MarketLogin() {

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
            const response = await axios.post('http://localhost:8080/login', {
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
                navigate('/marketsystem');
            }, 2000);
        } catch (error) {
            console.error('Erro ao fazer login', error);
            setError('Login ou senha incorretos.'); // Definir mensagem de erro
        }
    };

    return (
        <main className={Styles.new} >
            {welcomeMessage && (
                <div className="welcome-popup">
                    {welcomeMessage}
                </div>
            )}
            {/* Container branco da tela de login do mercado */}
            <div className={Styles.container_new} id='container-code' >

                {/* Div com a logo da pechincha dentro dela */}
                <div className={Styles.logo}>
                    <img src={logo} alt="" />
                </div>

                {/* Titulos do formulario */}
                <div className={Styles.forms_new} id='forms-code' >
                    <h2>Área do mercado</h2>
                    <p className={Styles.new_p}>Faça seu login para continuar</p>


                    {/* Inicio dos formularios */}
                    <form onSubmit={handleLogin} className={Styles.new_forms} id='code-forms' >
                        <label htmlFor="">E-mail</label>
                        <input type="email" value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Digite seu Email' className={Styles.email} />  {/*Input para o email do mercado*/}

                        <label>Senha</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}  placeholder='Digite sua senha' className={Styles.email} /> {/*Input para a senha do mercado*/}

                        {error && <p className='error-message' id='error'>{error}</p>} {/* Mostrar mensagem de erro se houver */}

                        {/* Botao com o link que da acesso ao mercado com seu sistema */}
                       <button type='submit' onClick={scrollToTop}>ENTRAR</button>{/*Btn para entrar no sistema do mercado*/}

                        <p className={Styles.new_password}>Esqueceu sua senha? <Link to="/recover">Recupere aqui</Link></p>
                        <p className={Styles.new_password}>Não possui cadastro? <Link to="/registermarket">Clique aqui</Link></p>



                    </form>
                    {/* Fim do formulario */}
                </div>

            </div>
        </main>
    )
}

export default MarketLogin;