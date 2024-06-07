import styles from './HeaderConsumer.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar';
import user from '../../assets/img/user.png'


function HeaderConsumer() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.header_upp}>
                <div className={styles.container_header_up} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>


                        <li>
                            <Link to="/about">Sobre nós</Link>
                        </li>

                        <li>
                            <Link to="/homemarket">Seja Parceiro</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.header_up}>

                <div className={styles.container_header} id='container'>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={logo} alt="Logo" className={styles.img_logo} />
                        </Link>
                    </div>

                    <SearchBar />
                    <div className={styles.nav_right}>
                        <Link to='/login'>
                            <div className={styles.user_icon}>
                               <img src={user} alt="" className={styles.user} />
                            </div>
                        </Link>


                        <Link to='/cart'>
                            <div className={styles.cart_icon}>
                                <div className={styles.cart_notify}>
                                    <span>1</span>
                                </div>
                                <i class="fa-solid fa-cart-shopping" id={styles.cart_icon}></i>
                            </div>

                        </Link>
                    </div>

                </div>
            </div>

            <div className={styles.header_down}>
                <div className={styles.container_header} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link className={styles.principal_link} to="/listagem">PARA VOCÊ</Link>
                        </li>


                        <li>
                            <Link to="/listagem">Categorias</Link>
                        </li>

                        <li>
                            <Link to="/snacks">Snacks</Link>
                        </li>

                        <li>
                            <Link to="/bebidas">Bebibas</Link>
                        </li>


                        <li>
                            <Link to="/graos">Grãos</Link>
                        </li>

                        <li>
                            <Link to="/massas">Massas</Link>
                        </li>

                        <li>
                            <Link to="/listagem">Variados</Link>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderConsumer;