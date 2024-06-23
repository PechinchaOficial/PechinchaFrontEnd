import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto';
import Enlatados from '../ListagemProdutos/CategoriaProduto/Enlatados';
import Styles from './Product.module.css'
import salgadinho from '../../assets/img/salgadinho.png'

function Product() {

    return (
        <div>

            <HeaderConsumer />
            <main className={Styles.Background} id="container">
                <article className={Styles.Boxtext}>
                    <h1 className={Styles.title}>Finalize seu pedido</h1>
                    <div className={Styles.Subtitlebox}>
                        <div className={Styles.icoHome}> <img src="" /> </div>
                        <h4 className={Styles.Subtitle}>Rua.Tito N450</h4>
                    </div>

                </article>
                <article className={Styles.ProductsInfo}>

                    <div className={Styles.BackProducts}>

                        <article className={Styles.BoxLeft}>

                            <div className={Styles.Box1}>
                                <img src={salgadinho} alt="" className={Styles.img_product_2} />
                            </div>

                        </article>

                        <article className={Styles.BoxRight}>

                            <div className={Styles.Box2}>
                                <img src={salgadinho} alt="" className={Styles.img_product} />
                            </div>
                        </article>
                    </div>

                    <div className={Styles.BackInfo}>
                        <article className={Styles.BoxInfo}>
                            <div className={Styles.InfoLeft}>
                                <div className={Styles.BoxInfoProduct}>
                                    <h4 className={Styles.titulo_produto}>Salgadinho Cheetos</h4>
                                    <h5 className={Styles.sub_titulo_product}>salgadinho de milho Elma Chips</h5>
                                </div>
                                <div className={Styles.DateValue}>
                                    <div className={Styles.BoxdateValue}>
                                        <h4 className={Styles.Date}> Vence: 30/05/2024 </h4>
                                        <h2 className={Styles.Value}>R$ 19,90 </h2>
                                    </div>
                                    <div className={Styles.BoxDesc}>
                                        <div className={Styles.Desc}>
                                            <h1>-50%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.InfoRight}>
                                <div className={Styles.BoxTextProduct}>
                                    <h1>Qtd</h1>
                                    <h1>Valor Un.(R$)</h1>
                                    <h1>Total(R$)</h1>
                                </div>
                                <div className={Styles.BackValuesProduct}>
                                    <div className={Styles.Values}>
                                        <input type="number" placeholder='1' className={Styles.QtdBtn} />
                                    </div>
                                    <div className={Styles.Values} id={Styles.None}><p> R$ 1,35 </p></div>
                                    <div className={Styles.Values} id={Styles.None}><p> R$ 1,35 </p></div>
                                </div>
                                <button className={Styles.Btn}>
                                    <p>Finalizar compra</p>
                                </button>
                            </div>
                        </article>
                    </div>
                </article>


                <CategoriaProduto categoria="Produtos relacionados" />

            </main>
        </div>
    )

}

export default Product;