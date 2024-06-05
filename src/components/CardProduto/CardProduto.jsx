import styles from './CardProduto.module.css'
import imgprod from '../../assets/img/arroz.svg';
import { Link } from 'react-router-dom';


function CardProduto() {
    return (
        <div className={styles.cardproduto}>
            <img src={imgprod} alt="Produto" className={styles.imgprod} />
            <h1 className={styles.prodNome}>Arroz Camil</h1>
            <div className={styles.prod_info}>
                <span className={styles.info_prod}>
                    Data: até 21/12/2024
                </span>

                <span className={styles.info_prod}>
                    21 Unidades restantes
                </span>

            </div>

            <div className={styles.valores}>
                <span className={styles.preco}>
                    R$ 19,90
                </span>

                <div className={styles.desconto}>
                    <span className={styles.porcentagem}>
                        -50%
                    </span>
                </div>
            </div>

<Link to='/cart'>
<button className={styles.btn}>
                ADICIONAR
            </button>
</Link>
        </div>
    )
}

export default CardProduto;