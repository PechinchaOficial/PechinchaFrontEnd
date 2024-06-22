import '../Login/Login.css';
import Styles from './RegisterClient.module.css'
import React from 'react';
import { Link } from 'react-router-dom'


function RegisterClient (){
    return(

        <main className='background_login'>
            <section className='container-login'> 
               <div className='forms-register' id={Styles.form}>
                    
                    <div className='banner-login' id={Styles.banner}>
                        <h2 className='title-banner-login'>
                            Veio pechinchar?
                        </h2>
                        <p>Caso ja tenha uma conta clique abaixo 
                            e tenha acesso a todos recursos</p>

                        <a href="">
                            <Link to="/login">
                                <button>
                                Entrar
                                </button>
                            </Link>
                        </a>
                    </div>
                    <form action="" className='forms-login' id={Styles.boxtext}>
                            <h2 className={Styles.create}>Crie a sua conta</h2>
                            <h3 className={Styles.fill}>Preencha todos os campos</h3>

                            <label htmlFor="">Nome</label>
                            <input type="text" placeholder='Digite seu nome' />

                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Digite seu email' />

                            <label htmlFor="">Senha</label>
                            <input type="text" placeholder='Digite sua senha' />

                            <label htmlFor="">Confirmar senha</label>
                            <input type="text" placeholder='Digite sua senha' />

                        

                            <p className='privacy-policy'>Ao continuar com o acesso você concorda com a nossa <a href="#">politica de privacidade</a></p>
                    </form>
               </div>
            </section>

        </main>

    )
}

export default RegisterClient;

