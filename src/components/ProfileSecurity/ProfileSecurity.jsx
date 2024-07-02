import Styles from './ProfileSecurity.module.css'
import HeaderConsumer from '../HeaderConsumer/HeaderConsumer';
import { Link } from 'react-router-dom';
import user from '../../assets/img/user.png'

function ProfileSecurity() {
    return (
        <main className={Styles.Background}>
            <div className={Styles.BoxHeader}>
                <HeaderConsumer />
            </div>
            <section className={Styles.Container} id='container'>
                <aside className={Styles.Left}>
                    <nav className={Styles.side_bar}>
                        <ul>
                            <li><h3 className={Styles.side_title}>Preferencias</h3></li>
                            <li><i class="fa-solid fa-pen"></i> <a href="#">Editar informações</a></li>
                            <Link to=''> <li><i class="fa-solid fa-shield-halved"></i> <a href="#">Segurança</a></li> </Link>
                            <li><i class="fa-solid fa-circle-question"></i><a href="#">Ajuda</a></li>
                            <li><i class="fa-solid fa-right-from-bracket"></i><Link to="/">Sair</Link></li>

                        </ul>
                    </nav>
                </aside>
                <article className={Styles.Right}>
                    <section className={Styles.container}>
                        <header className={Styles.BoxTitle}>
                            <h1>Segurança</h1>
                            <div className={Styles.BoxPictureProfile}>
                                <img src={user} alt="Perfil de usuário" className={Styles.user} />
                            </div>
                        </header>
                        <article className={Styles.ContainerBox}>
                            <div className={Styles.Box}><h1>Recuperar sua senha</h1></div>
                            <div className={Styles.Box}><h1>Autentificação por dois fatores</h1></div>
                            <div className={Styles.Box}><h1>Deletar conta</h1></div>
                        </article>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default ProfileSecurity;