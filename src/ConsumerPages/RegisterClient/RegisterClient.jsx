import Styles from './RegisterClient.module.css'
import React from 'react';
import { Link } from 'react-router-dom'


function RegisterClient (){

    const [usuario, setUsuario] = useState({
        nome_usuario: '',
        cpf_usuario: '',
        senha_usuario: '',
        email_usuario: '',
        genero_usuario: '',
        data_nasc_usuario: '',
        data_registro_usuario: '',
        plano_usuario: '',
        permissao_usuario: '',
        endereco_usuario: '',
        foto_perfil_usuario: ''
      });

      
    return(

        <main className='background_login'>
            <section  className={Styles.container_register_client}> 

            <div className={Styles.banner_register}>

            <h2 className={Styles.title_banner_register}>Bem vindo de volta!</h2>
            <p className={Styles.text_banner_register}>Clique abaixo caso ainda não tenha uma conta e aproveite de todas as funções</p>

            <Link to="/registerclient">
                <button>ENTRAR</button>
            </Link>
            
            </div>

            <div className={Styles.forms_register_client}>
                
                    <form action="" className={Styles.forms_register}>
                        <h2 className={Styles.title_register}>Crie sua conta</h2>
                        <h3 className={Styles.sub_title_register}>Preencha todos os campos</h3>

                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Digite seu nome' />

                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder='Digite seu E-mail' />

                        <label htmlFor="">Senha</label>
                        <input type="password" placeholder='Digite sua senha'/>

                        <label htmlFor="">Confirmar Senha</label>
                        <input type="password" placeholder='Confirme sua senha'/>

                        <Link to='/listagem'>
                         <button>
                            CADASTRAR
                        </button> 
                        </Link>

                        <Link to="/login">
                            <button className={Styles.register_client_button}>Entrar</button>
                        </Link>

                        <p className={Styles.polici_privacy}>Ao continuar com o acesso você concorda com a nossa<a href="#"> politica de privacidade</a></p>
                    </form>
            </div>

           

            </section>

        </main>

    )
}

export default RegisterClient;

