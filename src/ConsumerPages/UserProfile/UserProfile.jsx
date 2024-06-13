import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import styles from './UserProfile.module.css'
import user from '../../assets/img/user.png'
import Button from '../../components/Button/Button';
import brasil from '../../assets/img/brasil.png'
import usa from '../../assets/img/usa.png'
import BtnLang from '../../components/BtnLang/BtnLang';


function UserProfile() {
    return (
        <div className={styles.container_profile}>
            <HeaderConsumer />
            <div className={styles.container_content} id='container'>
                <nav className={styles.side_bar}>
                    <ul>
                        <li><h3 className={styles.side_title}>Preferências</h3></li>
                        <li><i class="fa-solid fa-pen"></i> <a href="#">Editar informações</a></li>
                        <li><i class="fa-solid fa-shield-halved"></i> <a href="#">Segurança</a></li>
                        <li><i class="fa-solid fa-circle-question"></i><a href="#">Ajuda</a></li>
                    </ul>
                </nav>

                <main className={styles.user_content}>
                    <section className={styles.container_user}>
                        <div className={styles.header_section}>
                            <h2>Editar Informações</h2>
                            {/* <div className={styles.user_icon}>
                                <img src={user} alt="" className={styles.user} />
                            </div> */}
                        </div>

                        <form action="#" className={styles.form_info}>
                            <div className={styles.input_group}>
                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" value="Kaique" />
                                </div>

                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">Último nome</label>
                                    <input type="text" value="Oliveira" />
                                </div>


                                <div className={styles.input_item}>
                                    <label htmlFor="">E-mail</label>
                                    <input type="text" value="kaiqueoliveira@gmail.com" />
                                </div>

                                <div className={styles.input_item}>
                                    <label htmlFor="">Celular</label>
                                    <input type="text" value="(11) 98763-9871" />
                                </div>

                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">Cidade</label>
                                    <input type="text" value="Carapicuiba" />
                                </div>

                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">Estado</label>
                                    <input type="text" value="São Paulo " />
                                </div>

                            </div>
                        </form>
                        <section className={styles.language_section}>
                            <h3>Alterar idioma</h3>
                          
                                <BtnLang/>
                          
                        </section>


                        <div className={styles.container_btn}>
                            <button className={styles.btn} id={styles.btn_cancel}>
                                Cancelar
                            </button>

                            <button className={styles.btn}>Salvar</button>

                        </div>
                    </section>


                </main>


            </div>


        </div>
    )
}

export default UserProfile;