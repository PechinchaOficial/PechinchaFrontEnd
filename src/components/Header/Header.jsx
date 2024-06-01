import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoHeader.svg'
import Button from '../Button/Button'
function Header() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.header_up}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" className={styles.img_logo} />
                </div>

                {/* <div className={styles.search}>
                    <input type="search" placeholder='Busque na sua região' className={styles.search_bar} />
                </div> */}
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
                </ul>


                <Button text='Login' color='azul' />
            </div>

            <div className={styles.header_down}>

            </div>
        </header>
    )
}

export default Header;