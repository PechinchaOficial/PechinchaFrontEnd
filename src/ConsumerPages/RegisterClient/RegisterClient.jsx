import Styles from './RegisterClient.module.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../../services/UsuarioService'; // Assumindo que haverá um serviço `createUser` para criar usuários


function RegisterClient() {

    const [user, setUser] = useState({
        email: '',
        senha: '',
        nome: '',
        telefone: '',
        datanascimento: '',
        status: 1,
        documento: '',
        tipo: '', // Padrão como Consumidor
        enderecos: [{
            cidade: '',
            estado: '',
            cep: '',
            bairro: '',
            rua: '',
            numero: '',
            complemento: ''
        }]
    });

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser(user);
            console.log('Usuário criado com sucesso:', response.data);
            navigate('/login')
        } catch (error) {
            if (error.response) {
                // O servidor retornou uma resposta com status fora da faixa 2xx
                console.error('Erro ao criar usuário:', error.response.data);
                setErrors(error.response.data.errors);
             
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta
                console.error('Erro de requisição:', error.request);
            } 
            else {
                // Outro tipo de erro ocorreu
                console.error('Erro ao processar requisição:', error.message);
            }
        }
    };
    return (

        <main className='background_login'>

            {/* Banner na lateral do formulario do cliente  */}

            <div className={Styles.container_register_client}>

                <div className={Styles.banner_register}>

                    <h2 className={Styles.title_banner_register}>Veio Pechinchar ?</h2>
                    <p className={Styles.text_banner_register}>Caso já tenha uma conta clique abaixo e tenha acesso a todos os recursos</p>

                    <Link to="/login">
                        <button>ENTRAR</button>
                    </Link>

                </div>

                <div className={Styles.forms_register_client}>

                    {/* Inicio de Formulario de cadastro do cliente */}

                    <form onSubmit={handleSubmit} className={Styles.forms_register}>
                        <h2 className={Styles.title_register}>Crie sua conta</h2>
                        <h3 className={Styles.sub_title_register}>Preencha todos os campos</h3>

                        <label htmlFor="">Nome</label>
                        <input name='nome' value={user.nome} onChange={handleChange} type="text" placeholder='Digite seu nome' />{/*Input com o nome do usuario */}

                        <label >E-mail</label>
                        <input name="email" value={user.email} onChange={handleChange} type="email" placeholder='Digite seu E-mail' />{/*Input com o email do usuario */}

                        <label htmlFor="">Senha</label>
                        <input name="senha" value={user.senha} onChange={handleChange} type="password" placeholder='Digite sua senha' />{/*Input com a senha do usuario*/}

                        <label htmlFor="">Confirmar Senha</label>
                        <input type="password" placeholder='Confirme sua senha' />{/*Input para confirmar a senha do usario*/}

                        {/* botão que leva para a pagina de cadastro do cliente */}
                        {errors.length > 0 && (
                            <div>
                                <ul>
                                    {errors.map((error, index) => (
                                        <p className={Styles.error} key={index}>{error.defaultMessage}</p>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button type='submit'>
                            CADASTRAR
                        </button>



                        {/* Botão que faz o login do usuario */}
                        <Link to="/login">
                            <button className={Styles.register_client_button}>ENTRAR</button>
                        </Link>

                        <p className={Styles.polici_privacy}>Ao continuar com o acesso você concorda com a nossa<a href="#"> politica de privacidade</a></p>
                    </form>

                    {/* Fim do formulario */}
                </div>



            </div>

        </main>

    )
}

export default RegisterClient;

