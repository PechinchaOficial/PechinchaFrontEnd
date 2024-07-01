import React, { useRef, useEffect, useState } from 'react';
import { useCart } from '../../ConsumerPages/Cart/CartContext';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import CardCheckout from '../../components/CardCheckout/CardCheckout';
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto';

function Cart() {
    const { cartItems } = useCart();
    const preco = useRef()

    const [precos, seteprecos] = useState()

    function asa() {
        item.preco = item.preco * 3
    }
    

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.cart_container}>
                <div className={styles.card_container} id='container'>
                    <section className={styles.cart}>
                        <header className={styles.header_cart}>
                            <Link to='/listagem'> <i className="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                            <h2 className={styles.title}>Meu Carrinho</h2>
                        </header>

                        <div className={styles.container_cart}>
                            <table className={styles.table_prod}>
                                <thead className={styles.table_head}>
                                    <tr className={styles.table_titles}>
                                        <th></th>
                                        <th>Preço</th>
                                        <th>Quantidade</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index} className={styles.item}>
                                            <td>
                                                <div className={styles.prod_info}>
                                                    <img src={item.fotoproduto} alt="Produto" className={styles.prod_img} />
                                                    <div className={styles.prod_text}>
                                                        <h3>{item.name}</h3>
                                                        <p>{item.expiryDate}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>R$ {item.preco}</span>
                                            </td>
                                            <td>
                                                <div className={styles.container_qtd}>
                                                    <div className={styles.prod_qtd}>
                                                        <button className={styles.btn_qtd}>
                                                            <span>-</span>
                                                        </button>
                                                        <span>1</span>
                                                        <button className={styles.btn_qtd}>
                                                            <span onClick={asa}>+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>R$ {item.preco}</span>
                                            </td>
                                            <td>
                                                <i className="fa-solid fa-trash" id={styles.trash}></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.total}>
                                <h2 className={styles.container_titulo}>Resumo da compra</h2>

                                <div className={styles.container_1}>
                                    <div className={styles.total_info}>
                                        <h4 className={styles.texto_produto}>Plano: Pechinchas</h4>
                                        <span className={styles.price_produto}>R$ 2,50</span>
                                    </div>
                                </div>

                                <div className={styles.container}>
                                    <div className={styles.total_info}>
                                        <h4 className={styles.texto_total}>Total:</h4>
                                        <span ref={preco} className={styles.price}>R$ 4,80</span>
                                    </div>
                                </div>

                                {/* Link com um props para trocar de URL onde eu chamar esse componente */}

                                <Link >
                                    <button className={styles.btn}>
                                        FINALIZAR PAGAMENTO
                                    </button></Link>
                            </div>
                        </div>
                    </section>
                </div>

               <CategoriaProduto categoria="Produtos relacionados" />

            </main>
        </div>
    );
}

export default Cart;
