import styles from './CheckoutPage.module.css';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import { Link } from 'react-router-dom';
import visa from '../../assets/img/visa.png';
import elo from '../../assets/img/elo.png';
import pix from '../../assets/img/pix.png';
import master from '../../assets/img/MasterCard.png';
import american from '../../assets/img/american_express.png';
import CardCheckout from '../../components/CardCheckout/CardCheckout';

function CheckoutPage() {
    const handleDivClick = (inputId) => {
        document.getElementById(inputId).checked = true;
    };

    return (
        <div>
            <HeaderConsumer />

            <main className={styles.cart_container}>
                <div className={styles.card_container} id='container'>
                    <section className={styles.cart}>
                        <header className={styles.header_cart}>
                            <Link to='/cart'> <i className="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                            <h2 className={styles.title}>Escolha a forma de pagamento</h2>
                        </header>

                        <div className={styles.container_cart}>
                            <div className={styles.container_pagamento}>
                                <div className={styles.btn_compra} onClick={() => handleDivClick('card')}>
                                    <input type="radio" name="payment-method" id="card" className={styles.input} />
                                    <div className={styles.container_texto}>
                                        <h2 className={styles.texto_compra}>Cartão</h2>
                                    </div>
                                    <div className={styles.container_img}>
                                        <img src={visa} alt="Visa" />
                                        <img src={master} alt="MasterCard" />
                                        <img src={american} alt="American Express" />
                                        <img src={elo} alt="Elo" />
                                    </div>
                                </div>

                                <div className={styles.btn_compra} onClick={() => handleDivClick('pix')}>
                                    <input type="radio" name="payment-method" id="pix" className={styles.input} />
                                    <div className={styles.container_texto}>
                                        <h2 className={styles.texto_compra}>PIX</h2>
                                    </div>
                                    <div className={styles.container_img_2}>
                                        <img src={pix} alt="Pix" />
                                    </div>
                                </div>
                            </div>

                            <CardCheckout url='/readyproduct' produto="Salgadinho de Milho" price="R$2.40" price_t="R$2.40" co2={styles.container_co2} reducao="2,5Kg" />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default CheckoutPage;
