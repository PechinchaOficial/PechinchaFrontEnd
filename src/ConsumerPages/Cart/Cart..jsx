import styles from './Cart.module.css'

function Cart() {
    return (
        <main id='container'>
            <section className={styles.cart}>
                <h2 className={styles.title}>Meu Carrinho</h2>
                <div className={styles.container_cart}>

                    <div className={styles.prod_list}>
                    </div>

                    <div className={styles.total}>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cart;