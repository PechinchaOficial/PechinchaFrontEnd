import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import TituloFormato from '../../components/TituloFormato/TituloFormato';
import styles from './UserType.module.css'
import userIcon from '../../assets/img/usericon.png'
import cartIcon from '../../assets/img/carticon.png'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';

function Usertype() {
    return (
        <div className={styles.container_content}>
  <Header/>
            <main className={styles.background}>
                <TituloFormato
                    categoria="Quem está acessando?" />

                <div className={styles.container_choose}>
                    <Link to='/login'>
                        <div className={styles.user_card}>
                            <img src={userIcon} alt="Icone de usúario" />
                            <h3>Sou <span>Consumidor</span></h3>
                        </div>
                    </Link>

                    <Link to='/registermarket'>

                        <div className={styles.user_card} id={styles.color}>
                            <img src={cartIcon} alt="Icone de usúario" />
                            <h3>Sou Mercado</h3>
                        </div>
                    </Link>
                </div>
            </main>
        </div>

    )
}

export default Usertype;