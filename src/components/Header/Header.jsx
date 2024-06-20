import styles from './Header.module.css'
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

    const option = React.useRef();
    const option_mobile = React.useRef();


    function ShowLogins() {
        option.current.style.height = '120px'
        option_mobile.current.style.height = '120px'
        option_mobile.current.style.transition = '0.3s all'
        option.current.style.transition = '0.3s all'
    }


    function HiddenLogins() {
        option.current.style.height = '0px'
        option.current.style.transition = '0.3s all'
        option_mobile.current.style.height = '0px'

    }
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

            <div className={styles.header_up}>

                <div className={styles.container_header} id='container'>
                    <div className={styles.logo}>
                        <Link onClick={scrollToTop} to="/">
                            <img src={logo} alt="Logo" className={styles.img_logo} />
                        </Link>
                    </div>



                    <div className={styles.search_desktop}>
                        <SearchBar />
                    </div>
                    <div className={styles.login_option}>
                       
                            <button onMouseOver={ShowLogins} className={styles.btn}>Entrar<i class="fa-solid fa-angle-down"></i></button>
                            <div onMouseLeave={HiddenLogins} ref={option} className={styles.option}>
                                <ul>
                                    <Link to='/login' onClick={scrollToTop}><li><i class="fa-solid fa-user"></i>Sou cliente</li></Link>
                                    <Link to='/marketlogin' ><li><i class="fa-solid fa-store"></i>Sou Mercado</li></Link>
                                </ul>
                            </div>
                        
                    </div>

                    <img onClick={ShowMobile} src={open} alt="Botão para fechar" className={styles.icon_mobile} />


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
                            <Link onClick={scrollToTop} className={styles.principal_link} to="/listagem">Ínicio</Link>
                        </li>


                        <li>
                            <Link onClick={scrollToTop} to="/listagem">Produtos</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/homemarketdeslogado">Seja Parceiro</Link>
                        </li>

                        <li>
                            <Link onClick={scrollToTop} to="/bebidas">Sobre nós</Link>
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

                <div className={styles.login_option} id={styles.option_mobile}>
                       
                       <button onClick={ShowLogins} className={styles.btn}>Entrar<i class="fa-solid fa-angle-down"></i></button>
                       <div onMouseLeave={HiddenLogins} ref={option_mobile} className={styles.option}>
                           <ul>
                               <Link to='/login'><li><i class="fa-solid fa-user"></i>Sou cliente</li></Link>
                               <Link to='/marketlogin' ><li><i class="fa-solid fa-store"></i>Sou Mercado</li></Link>
                           </ul>
                       </div>
                   
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
                            <i class="fa-solid fa-list"></i> <Link onClick={scrollToTop} to="/homemarket">Produtos</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderConsumer;