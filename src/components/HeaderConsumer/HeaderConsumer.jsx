import styles from './HeaderConsumer.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar';
import BtnLang from '../BtnLang/BtnLang';
import user from '../../assets/img/user.png'
import { useTranslation } from "react-i18next";
import React from 'react';

function HeaderConsumer() {
    const { t } = useTranslation();

    const profile_option = React.useRef();

    function ShowOption(){
        profile_option.current.style.height='500px'
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    

    return (
        <header className={styles.cabecalho}>
            <div className={styles.header_upp}>
                <div className={styles.container_header_up} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link onClick={scrollToTop} to="/">Início</Link>
                        </li>


                        <li>
                            <Link onClick={scrollToTop} to="/about">Sobre nós</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/homemarket">Seja Parceiro</Link>
                        </li>


                    </ul>
                </div>
            </div>
            <div className={styles.header_up}>

                <div className={styles.container_header} id='container'>
                    <div className={styles.logo}>
                        <Link onClick={scrollToTop} to="/">
                            <img src={logo} alt="Logo" className={styles.img_logo} />
                        </Link>
                    </div>

                    <SearchBar />
                    <div className={styles.nav_right}>


                        <Link onClick={scrollToTop} to='/cart'>
                            <div className={styles.cart_icon}>
                                <div className={styles.cart_notify}>
                                    <span>1</span>
                                </div>
                                <i class="fa-solid fa-cart-shopping" id={styles.cart_icon}></i>

                            </div>

                        </Link>

                        <Link onClick={scrollToTop}  to='/userprofile' >
                            <div className={styles.user_icon}>
                                <img src={user} alt="" className={styles.user} />
                            </div>
                        </Link>


                        <nav className={styles.nav_profile} ref={profile_option}>
                            <ul>
                                <li><i class="fa-solid fa-pen"></i> <a href="#">{t("Editar informações")}</a></li>
                                <li><i class="fa-solid fa-shield-halved"></i> <a href="#">{t("Segurança")}</a></li>
                                <li><i class="fa-solid fa-circle-question"></i><a href="#">{t("Ajuda")}</a></li>
                                <li><i class="fa-solid fa-right-from-bracket"></i><Link to="/homedeslogado">{t("Sair")}</Link></li>

                            </ul>
                        </nav>
                    </div>

                </div>


            </div>

            <div className={styles.header_down}>
                <div className={styles.container_header} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link onClick={scrollToTop} className={styles.principal_link} to="/listagem">PARA VOCÊ</Link>
                        </li>


                        <li>
                            <Link onClick={scrollToTop} to="/listagem">Categorias</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/snacks">Snacks</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/bebidas">Bebibas</Link>
                        </li>


                        <li>
                            <Link onClick={scrollToTop} to="/graos">Grãos</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/massas">Massas</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/listagem">Variados</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderConsumer;