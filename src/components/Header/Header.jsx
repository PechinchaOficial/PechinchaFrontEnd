import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar';
function Header() {
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
                    <Link to='/login'>
                    <Button text='Login' color='azul' />
                    </Link>
                    
                </div>



            </div>

            <div className={styles.header_down}>
                <div className={styles.container_header} id='container'>
                    <ul className={styles.nav_link}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>


                        <li>
                            <Link to="/about">Sobre nós</Link>
                        </li>

                        <li>
                            <Link to="/listagem">Produtos</Link>
                        </li>

                        <li>
                            <Link to="/homemarket">Seja Parceiro</Link>
                        </li>


                        <li>
                            <Link to="/registerMarket">Login mercado</Link>
                        </li>

                        <li>
                            <Link to="/marketSystem">Sistema</Link>
                        </li>

                        <li>
                            <Link to="/cart">Carrinho</Link>
                        </li>

                        <li>
                            <Link to="/recover">senha</Link>
                        </li>
                        <li>
                            <Link to="/product">product</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;