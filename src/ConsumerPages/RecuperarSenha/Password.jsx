import'./Password.css';

function Password() {
    return (

        <main className='informacao'>
            <h1>Senha</h1>

            <section className='conteiner_password' >
                <div  className='forms_recover'>
                    <h2>Recuperar Senha</h2>
                    <h3>Digite seu email para enviarmos um código de segurança.</h3>

                        <form action="" className='forms_password'>
                            <label htmlFor="">Email</label>
                            <input type="text"  placeholder='Digite seu Email'/>


                            <button>ENVIAR</button>

                            <p className='recover_password'>Já possui cadastro? <a href="#">Entre aqui</a></p>

                        </form>

                            

                    </div>
            </section>

        </main>

    )
}


export default Password;