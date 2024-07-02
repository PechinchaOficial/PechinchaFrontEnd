import Styles from './HelpProfile.module.css'
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import user from '../../assets/img/user.png'
import UserProfile from '../UserProfile/UserProfile';
import { Link } from 'react-router-dom';


function HelpProfile() {

    return (
        <main className={Styles.Background}>
            <div className={Styles.BoxHeader}>
                <HeaderConsumer />
            </div>
            <section className={Styles.help} id='container'>
                <aside className={Styles.Left}>
                    <nav className={Styles.side_bar}> 
                        <ul>
                            <li><h3 className={Styles.side_title}>Preferencias</h3></li>
                            <Link to='/userprofile'> <li><i class="fa-solid fa-pen"></i> <a href="#">Editar informações</a></li> </Link>
                            <Link to='/profilesecurity'> <li><i class="fa-solid fa-shield-halved"></i> <a href="#">Segurança</a></li> </Link>
                            <li><i class="fa-solid fa-circle-question"></i><a href="#">Ajuda</a></li>
                            <li><i class="fa-solid fa-right-from-bracket"></i><Link to="/">Sair</Link></li>

                        </ul>
                    </nav>
                </aside>
                <article className={Styles.Right}>

                    <section className={Styles.container}>
                        <header className={Styles.BoxTitle}>
                            <h1>Ajuda</h1>
                            <div className={Styles.BoxPictureProfile}>
                                <img src={user} alt="Perfil de usuário" className={Styles.user} />
                            </div>
                        </header>
                        <article className={Styles.subtitle}>
                            <h2>Entre em contato conosco:</h2>
                            <p>Escreva sua dúvida ou problema, que retornaremos em até 24 horas.</p>
                        </article>

                        <div className={Styles.input_profile} >
                            <div className={Styles.input_help} >
                                <label htmlFor='' ></label>
                                <input type='text' value='' />
                            </div>
                        </div>
                    </section>

                </article>
            </section>
        </main>
    )

}

export default HelpProfile;