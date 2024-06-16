import Styles from './Code.module.css';
import {Link} from 'react-router-dom'

function Code () {
    return (

        <main className={Styles.code} >
             <section className={Styles.container_code} id='container-code' >
                  <div  className={Styles.forms_code} id='forms-code' >
                        <h2>Digite o código que enviamos</h2>
                        <p className={Styles.code_p} >Não recebeu? <Link to="/recover">Enviar novamente</Link></p>

                            <form action='' className={Styles.code_forms} id='code-forms' >
                                <label htmlFor="">Código de segurança</label>
                                <input type="text"  placeholder='Digite o código que foi enviado' className={Styles.email} />

                              <Link to="/New"><button>CONFIRMAR</button></Link> 

                                <p className={Styles.code_password}>Já possui cadastro? <Link to="/login">Entre aqui</Link></p>

                            </form>

                    </div>

            </section>
        </main>
    )
}


export default Code;