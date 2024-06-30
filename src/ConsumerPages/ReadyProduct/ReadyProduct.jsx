import styles from './ReadyProduct.module.css'
import { Link } from 'react-router-dom'
import Enlatados from '../ListagemProdutos/CategoriaProduto/Enlatados';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import TrailResgistration from '../../components/TrailRegistrationMarket/TrailRegistration';

function ReadyProduct() {
    return (
        <div>
            < HeaderConsumer />
            <main className={styles.cart_container} >
                <div className={styles.BoxTrail}>
                    <TrailResgistration Cicle={styles.Cicle} Cicle1={styles.Cicle} Cicle2={styles.Cicle} Fase={styles.Fase} Divider1={styles.Divider1} Divider2={styles.Divider1} />
                </div>
                <div className={styles.card_container} id='container'>
                    <section className={styles.cart}>


                        <div className={styles.container_cart}>
                            <div className={styles.container_title}>
                                <h2 className={styles.title}>Compra realizada com <span className={styles.foco}>sucesso!</span></h2>
                                <h3 className={styles.subtitle}>Seu produto está pronto para retirada</h3>
                            </div>

                            <div className={styles.product}>
                                <div className={styles.img}>
                                    <img src="" alt="Imagem do produto" />
                                </div>
                                <div className={styles.info_prod}>
                                    <div className={styles.prod_data}>
                                        <h2>Plano: Pechinchas</h2>
                                        <p>Pagamento: Cartão de débito </p>
                                        <p>Endereço: Mercado Extra, Rua Lupércio, 87 </p>

                                    </div>

                                </div>
                            </div>

                            <div className={styles.btns}>
                                <Link to='/listagem'>
                                    <button className={styles.btn}>Continuar comprando</button>
                                </Link>

                                <Link to='/listagem'>
                                    <button className={styles.btn} id={styles.btn_second}>Voltar ao início</button>
                                </Link>

                            </div>

                        </div>
                    </section>
                </div>


                {/* <Enlatados categoria="Produtos Relacionados" /> */}
            </main>
        </div>
    )
}

export default ReadyProduct;