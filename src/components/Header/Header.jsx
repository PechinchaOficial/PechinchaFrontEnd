import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
function Header() {

const option = React.useRef();

    function ShowLogins() {
        option.current.style.height='120px'
        option.current.style.transition='0.3s all'

    }

    function HiddenLogins() {
        option.current.style.height='0px'
        option.current.style.transition='0.3s all'

    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    return (
        <header className={styles.cabecalho}>
            {/* <div className={styles.header_upp}>
                <div className={styles.container_header_up} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                        <li>
                            <Link to="/about">Sobre nós</Link>
                        </li>

                        <li>
                            <Link to="/listagem">Listagem</Link>
                        </li>

                        <li>
                            <Link to="/homemarket">Homemarket</Link>
                        </li>


                        <li>
                            <Link to="/registerMarket">Seja Parceiro</Link>
                        </li>

                        <li>
                            <Link to="/marketSystem">Sistema</Link>
                        </li>

                        <li>
                            <Link to="/cart">Carrinho</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className={styles.header_up}>

                <div className={styles.container_header} id='container'>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={logo} alt="Logo" className={styles.img_logo} />
                        </Link>
                    </div>

                    <SearchBar />
                    <div className={styles.login_option}>
                        <Link to='/userType' onClick={scrollToTop}>
                            <button onMouseOver={ShowLogins} className={styles.btn}>Entrar<i class="fa-solid fa-angle-down"></i></button>
                                <div onMouseLeave={HiddenLogins} ref={option} className={styles.option}>
                                    <ul>
                                       <Link to='/login'><li><i class="fa-solid fa-user"></i>Sou cliente</li></Link>
                                       <Link><li><i class="fa-solid fa-store"></i>Sou Mercado</li></Link>
                                    </ul>
                                </div>
                        </Link>
                    </div>

                </div>



            </div>

            <div className={styles.header_down}>
                <div className={styles.container_header} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link to="/homedeslogado" onClick={scrollToTop}>Início</Link>
                        </li>


                        <li>
                            <Link to="/aboutusdeslogado" onClick={scrollToTop}>Sobre nós</Link>
                        </li>

                        <li>
                            <Link to="/listagemdeslogado" onClick={scrollToTop}>Produtos</Link>
                        </li>

                        <li>
                            <Link to="/homemarketdeslogado" onClick={scrollToTop}>Seja Parceiro</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;