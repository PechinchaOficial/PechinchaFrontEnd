import styles from './Password.module.css';

function Password () {
    return (
        <main className='conteudo'>
            <h1>Senha</h1> 

             <section className={styles.Password} id="container" >
          
                  <div  className='forms_recover'>
                        <h2>Recuperar senha</h2>
                        <h3>Digite seu email para enviarmos um código de segurança</h3>

                            <form  className='forms_password'>
                                <label htmlFor="">Email</label>
                                <input type="text"  placeholder='Digite seu Email'/>

                                <button>ENVIAR</button>

                                <p className='recover_password'>Já possui cadastro? <a href="#">Entre aqui</a></p>

                                <p className='privacy-policy'>Ao continuar com o acesso você concorda com a nossa <a href="#">politica de privacidade</a></p>

                            </form>

                    </div>

            </section>
        </main>
    )
}


export default Password;