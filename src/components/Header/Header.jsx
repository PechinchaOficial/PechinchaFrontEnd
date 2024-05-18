import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.cabecalho}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;