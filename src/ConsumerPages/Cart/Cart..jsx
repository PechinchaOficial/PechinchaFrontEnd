import styles from './Cart.module.css'
import salgadinho from '../../assets/img/salgadinho.svg'
import { Link } from 'react-router-dom'
import ProdItem from './ProdItem/ProdItem';

function Cart() {
    return (
        <main className={styles.cart_container} >
            <div className={styles.card_container} id='container'>
                <section className={styles.cart}>
                    <header className={styles.header_cart}>
                        <Link to='/listagem'> <i class="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                        <h2 className={styles.title}>Meu Carrinho</h2>
                    </header>

                    <div className={styles.container_cart}>

                        <div className={styles.prod_list}>

                            <table className={styles.table_prod}>
                                <thead className={styles.table_head}>
                                    <tr>
                                        <th></th>
                                        <th>Preço</th>
                                        <th>Quantidade</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <ProdItem />
                                <ProdItem />
                                <ProdItem />
                            </table>
                        </div>

                        <aside className={styles.total}>
                            <div className={styles.total_info}>
                                <h4>Total:</h4>
                                <span className={styles.price}>R$ 4,80</span>
                            </div>

                            <button className={styles.btn}>
                                IR PARA O PAGAMENTO
                            </button>
                        </aside>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Cart;