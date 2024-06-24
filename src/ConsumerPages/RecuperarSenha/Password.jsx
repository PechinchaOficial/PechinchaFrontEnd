import Styles from './Password.module.css';
import {Link} from 'react-router-dom'

function Password () {
    return (

        <main className={Styles.password} >
             <section className={Styles.container_password} id='container-password' >
                  <div  className={Styles.forms_recover} id='forms-recover' >
                        <h2>Recuperar senha</h2>
                        <a>Digite seu email para enviarmos um <br /> código de seguranç</a>

                            <form action='' className={Styles.forms_password} id='forms-password' >
                                <label htmlFor="">E-mail</label>
                                <input type="email"  placeholder='Digite seu Email' className={Styles.email} />

                               <Link to="/Code"><button>ENVIAR</button></Link>

                                <p className={Styles.recover_password}>Já possui cadastro? <Link to="/login">Entre aqui</Link></p>

                            </form>

                    </div>

            </section>
        </main>
    )
}


export default Password;