import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import styles from './UserProfile.module.css'
import user from '../../assets/img/user.png'
import Button from '../../components/Button/Button';
import brasil from '../../assets/img/brasil.png'
import usa from '../../assets/img/usa.png'
import BtnLang from '../../components/BtnLang/BtnLang';
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';

function UserProfile() {
    const { t } = useTranslation();


    return (
        <div className={styles.container_profile}>
            <HeaderConsumer />
            <div className={styles.container_content} id='container'>
                <nav className={styles.side_bar}>
                    <ul>
                        <li><h3 className={styles.side_title}>{t("Preferencias")}</h3></li>
                        <li><i class="fa-solid fa-pen"></i> <a href="#">{t("Editar informações")}</a></li>
                        <li><i class="fa-solid fa-shield-halved"></i> <a href="#">{t("Segurança")}</a></li>
                        <li><i class="fa-solid fa-circle-question"></i><a href="#">{t("Ajuda")}</a></li>
                        <li><i class="fa-solid fa-right-from-bracket"></i><Link to="/homedeslogado">{t("Sair")}</Link></li>

                    </ul>
                </nav>

                <main className={styles.user_content}>
                    <section className={styles.container_user}>
                        <div className={styles.header_section}>
                            <h2>{t("Editar informações")}</h2>
                            {/* <div className={styles.user_icon}>
                                <img src={user} alt="" className={styles.user} />
                            </div> */}
                        </div>

                        <form action="#" className={styles.form_info}>
                            <div className={styles.input_group}>
                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">{t("Nome")}</label>
                                    <input type="text" value="Kaique" />
                                </div>

                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">{t("Último nome")}</label>
                                    <input type="text" value="Oliveira" />
                                </div>


                                <div className={styles.input_item}>
                                    <label htmlFor="">E-mail</label>
                                    <input type="text" value="kaiqueoliveira@gmail.com" />
                                </div>

                                <div className={styles.input_item}>
                                    <label htmlFor="">{t("Celular")}</label>
                                    <input type="text" value="(11) 98763-9871" />
                                </div>

                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">{t("Cidade")}</label>
                                    <input type="text" value="Carapicuiba" />
                                </div>

                                <div className={styles.input_item} id={styles.flex}>
                                    <label htmlFor="">{t("Estado")}</label>
                                    <input type="text" value="São Paulo " />
                                </div>

                            </div>
                        </form>
                        <section className={styles.language_section}>
                            <h3>{t("Alterar idioma")}</h3>
                          
                                <BtnLang/>
                          
                        </section>


                        <div className={styles.container_btn}>
                            <button className={styles.btn} id={styles.btn_cancel}>
                                {t("Cancelar")}
                            </button>

                            <Link to="/homedeslogado"><button className={styles.btn}>{t("Salvar")}</button></Link>

                        </div>
                    </section>


                </main>


            </div>


        </div>
    )
}

export default UserProfile;