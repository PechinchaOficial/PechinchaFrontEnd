import styles from './CardProduct.module.css'
import prodImg from '../../assets/img/cheetos.png'
import Button from '../Button/Button';
import {Link} from 'react-router-dom'

function CardProduct({ categoria, nome, img, link }) {
    return (
        <div className={styles.card_prod} id={categoria}>
            <div className={styles.img_prod} >
                <img src={img} alt="Imagem categoria" className={styles.prodImg} />
            </div>
            <h2 className={styles.title_prod}>{nome}</h2>
            <Link to={link}>
            <Button
                text="Eu quero" />
            </Link>
        </div>
    )
}

export default CardProduct;