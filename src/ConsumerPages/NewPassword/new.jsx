import Styles from './new.module.css';
import {Link} from 'react-router-dom'

function New () {
    return (

        <main className={Styles.new} >
             <section className={Styles.container_new} id='container-code' >
                  <div  className={Styles.forms_new} id='forms-code' >
                        <h2>Crie sua nova senha</h2>
                        <p className={Styles.new_p}>Preecha os campos</p>

                            <form action='' className={Styles.new_forms} id='code-forms' >
                                <label htmlFor="">Nova senha</label>
                                <input type="password"  placeholder='Digite sua nova senha' className={Styles.email} />

                                <label htmlFor="">Confirme a senha</label>
                                <input type="password"  placeholder='Digite sua nova senha' className={Styles.email} />

                              <Link to="/Login" ><button>REDEFINIR SENHA</button></Link>

                                <p className={Styles.new_password}>Já possui cadastro? <Link to="/recover">Entre aqui</Link></p>

                            </form>

                    </div>

            </section>
        </main>
    )
}


export default New;