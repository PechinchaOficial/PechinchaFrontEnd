import React, { useEffect, useState } from 'react';
import { useCart } from '../../ConsumerPages/Cart/CartContext';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto';

function Cart() {
    const { cartItems } = useCart();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCO2, setTotalCO2] = useState(0);

    const CO2_PER_PRODUCT = 0.2; // kg de CO2 economizados por produto

    useEffect(() => {
        calculateTotal();
        calculateTotalCO2();
    }, [cartItems]);

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += parseFloat(item.preco); // Converte para número antes de somar
        });
        setTotalPrice(total.toFixed(2)); // Formata o total para duas casas decimais
    };

    const calculateTotalCO2 = () => {
        let totalCO2 = cartItems.length * CO2_PER_PRODUCT; // Multiplica o número de itens pelo valor de CO2 por produto
        setTotalCO2(totalCO2.toFixed(2)); // Formata o total de CO2 para duas casas decimais
    };

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

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
                                                        <h3>{truncateString(item.nome, 20)}</h3>
                                                        <p>{item.datavalidade}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>R$ {parseFloat(item.preco).toFixed(2)}</span> {/* Formata o preço para duas casas decimais */}
                                            </td>
                                            <td>
                                                <div className={styles.container_qtd}>
                                                    <div className={styles.prod_qtd}>
                                                        <button className={styles.btn_qtd}>
                                                            <span>-</span>
                                                        </button>
                                                        <span>1</span> {/* Quantidade do produto */}
                                                        <button className={styles.btn_qtd}>
                                                            <span>+</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>R$ {(parseFloat(item.preco) * 1).toFixed(2)}</span> {/* Multiplica o preço pelo número de itens e formata para duas casas decimais */}
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

                                <div className={styles.container}>
                                    <div className={styles.total_info}>
                                        {cartItems.length > 0 ? (
                                            <div className={styles.teste}>
                                                {cartItems.map((item, index) => (
                                                    <div key={index} className={styles.cart_item}>
                                                        <span>{truncateString(item.nome, 20)}</span>
                                                        <span>R$ {parseFloat(item.preco).toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>Seu carrinho está vazio.</p>
                                        )}
                                    </div>
                                    <div className={styles.container}>
                                        <div className={styles.cart_item} id={styles.co2}>
                                            <span>Redução de <span className={styles.co2}>CO2</span>:</span>
                                            <span>{totalCO2} kg</span>
                                        </div>
                                        <div className={styles.total_info}>
                                            <h4 className={styles.texto_total}>Total:</h4>
                                            <span className={styles.price}>R$ {totalPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link to='/checkoutpage'>
                                    <button className={styles.btn}>
                                        FINALIZAR PAGAMENTO
                                    </button>
                                </Link>
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
