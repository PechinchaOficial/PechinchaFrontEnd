import styles from './HeaderConsumer.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import logoPocket from '../../assets/img/logo_minimalist.svg'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar';
import BtnLang from '../BtnLang/BtnLang';
import user from '../../assets/img/user.png'
import { useTranslation } from "react-i18next";
import React from 'react';
import open from '../../assets/img/open.svg'
import close from '../../assets/img/close.jpg'

function HeaderConsumer() {
    const { t } = useTranslation();
    const profile_option = React.useRef();
    const mobile = React.useRef();

    function CloseMobile() {
        mobile.current.style.width = '0px'
        mobile.current.style.transition = '0.5s all'
    }

    function ShowMobile() {
        mobile.current.style.width = '300px'
    }

    function ShowOption() {
        profile_option.current.style.display = 'block'
    }

    function HiddenOption() {
        profile_option.current.style.display = 'none'
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    return (

        <header className={styles.cabecalho}>
            {/* Header superior */}
            <div className={styles.header_upp}>
                <div className={styles.container_header_up} id='container'>
                    <div className={styles.logo}>
                        <Link onClick={scrollToTop} to="/home">
                            <img src={logoPocket} alt="Logo" className={styles.logo_pocket} />
                        </Link>
                    </div>
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

            {/* Header central */}

            <div className={styles.header_up}>

                <div className={styles.container_header} id='container'>
                    <div className={styles.logo}>
                        <Link onClick={scrollToTop} to="/home">
                            <img src={logo} alt="Logo" className={styles.img_logo} />
                        </Link>
                    </div>



                    <div className={styles.search_desktop}>
                        <SearchBar />
                    </div>
                    <div className={styles.nav_right}>
                        <Link onClick={scrollToTop} to='/cart'>
                            <div className={styles.cart_icon}>
                                <div className={styles.cart_notify}>
                                    <span>1</span>
                                </div>
                                <i class="fa-solid fa-cart-shopping" id={styles.cart_icon}></i>
                            </div>

                        </Link>

                        <Link onClick={scrollToTop} onMouseOver={ShowOption} to='/userprofile' className={styles.icons_user} >
                            <div className={styles.user_icon}>
                                <img src={user} alt="Perfil de usuário" className={styles.user} />
                            </div>
                        </Link>
                        <img onClick={ShowMobile} src={open} alt="Botão para fechar" className={styles.icon_mobile} />


                        <nav className={styles.nav_profile} ref={profile_option} onMouseLeave={HiddenOption}>
                            <ul>
                                <Link to='/userprofile'><li><i class="fa-solid fa-pen"></i> <a href="#">{t("Editar informações")}</a></li></Link>
                                <li><i class="fa-solid fa-shield-halved"></i> <a href="#">{t("Segurança")}</a></li>
                                <li><i class="fa-solid fa-circle-question"></i><a href="#">{t("Ajuda")}</a></li>
                                <li><i class="fa-solid fa-right-from-bracket"></i><Link to="/">{t("Sair")}</Link></li>
                                </ul>
                        </nav>
                    </div>

                </div>
            </div>

            <div className={styles.search_mobile}>
                <SearchBar />
            </div>

            {/* Header inferior */}

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

            {/* Header mobile */}

            <div ref={mobile} className={styles.header_mobile}>
                <div className={styles.container_close}>

                    <div className={styles.logo}>

                        <Link onClick={scrollToTop} onMouseOver={ShowOption} to='/userprofile' className={styles.icons_uer} >
                            <div className={styles.user_icon}>
                                <img src={user} alt="Perfil de usuário" className={styles.user} />
                            </div>
                        </Link>
                    </div>

                    
                        <img onClick={CloseMobile} src={close} alt="Botão para fechar" className={styles.icon_mobile} />
                    

                </div>
                <nav className={styles.nav_mobile}>
                    <ul>
                        <li>
                            <i class="fa-solid fa-house"></i><Link onClick={scrollToTop} to="/">Início</Link>
                        </li>

                        <li>
                            <i class="fa-solid fa-people-group"></i><Link onClick={scrollToTop} to="/about">Sobre nós</Link>
                        </li>

                        <li>
                            <i class="fa-solid fa-store"></i> <Link onClick={scrollToTop} to="/homemarket">Seja Parceiro</Link>
                        </li>

                        <li>
                            <i class="fa-solid fa-list"></i> <Link onClick={scrollToTop} to="/listagem">Produtos</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderConsumer;