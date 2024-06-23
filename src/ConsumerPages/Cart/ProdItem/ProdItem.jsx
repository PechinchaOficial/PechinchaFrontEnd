import styles from './ProdItem.module.css'
import salgadinho from '../../../assets/img/salgadinho.svg'

function ProdItem() {
    return (
        <tr className={styles.item}>
            <td >
                <div className={styles.prod_info}>
                    <img src={salgadinho} alt="Produto" className={styles.prod_img} />
                    <div className={styles.prod_text}>
                        <h3>Salgadinho de Milho</h3>
                        <p>Vence 03/07/2024</p>
                    </div>
                </div>
            </td>

            <td>
                <span>R$ 2,40</span>
            </td>

            <td>
                <div className={styles.container_qtd}>
                    <div className={styles.prod_qtd}>
                        <button className={styles.btn_qtd}>
                            <span>-</span>
                        </button>

                        <span>1</span>

                        <button className={styles.btn_qtd}>
                            <span>+</span>
                        </button>
                    </div>
                </div>

            </td>

            <td>
                <span>R$ 2,40</span>
            </td>

            <td>
                <i class="fa-solid fa-trash" id={styles.trash}></i>
            </td>
        </tr>
    )
}

export default ProdItem;