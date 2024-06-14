import styles from './HeaderConsumer.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar';
import BtnLang from '../BtnLang/BtnLang';
import user from '../../assets/img/user.png'

function HeaderConsumer() {

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
                        <Link onClick={scrollToTop}to="/about">Sobre nós</Link>
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
                    <Link onClick={scrollToTop}to='/userprofile'>
                            <div className={styles.user_icon}>
                               <img src={user} alt="" className={styles.user} />
                            </div>
                        </Link>


                        <Link onClick={scrollToTop} to='/cart'>
                            <div className={styles.cart_icon}>
                                <div className={styles.cart_notify}>
                                    <span>1</span>
                                </div>
                                <i class="fa-solid fa-cart-shopping" id={styles.cart_icon}></i>
                                <nav className={styles.nav_profile}>

</nav>
                            </div>

                        </Link>
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
                        <Link onClick={scrollToTop}to="/listagem">Categorias</Link>
                        </li>

                        <li>
                        <Link onClick={scrollToTop} to="/snacks">Snacks</Link>
                        </li>

                        <li>
                        <Link onClick={scrollToTop} to="/bebidas">Bebibas</Link>
                        </li>


                        <li>
                        <Link onClick={scrollToTop}to="/graos">Grãos</Link>
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