import styles from './CardProduct.module.css'
import prodImg from '../../assets/img/cheetos.png'
import Button from '../Button/Button';

function CardProduct() {
    return (
        <div className={styles.card_prod}>
            <div className={styles.img_prod}>
                <img src={prodImg} alt="" className={styles.prodImg} />
            </div>
            <h2 className={styles.title_prod}>Snacks</h2>
            <Button
                text="Eu quero" />
        </div>
    )
}

export default CardProduct;