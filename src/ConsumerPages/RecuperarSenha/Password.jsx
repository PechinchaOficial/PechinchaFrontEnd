import './Password.module.css'

function Password () {
    return (
        <main className='conteudo'>

            <section className='container_password'>
                  <div  className='forms'>
                        <h2>Recuperar senha</h2>
                        <h3>Digite seu email para enviarmos um código de segurança</h3>

                            <form action="" className='forms_password'>
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