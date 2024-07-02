import Header from '../../components/Header/Header';
import TrailResgistration from '../../components/TrailRegistrationMarket/TrailRegistration';
import Styles from './CardDetails.module.css'
import Card from '../../../src/components/CardCheckout/CardCheckout'

function CardDetails() {
    return (
        <main>
            <Header />
            <div className={Styles.Background} id="container">
                <div className={Styles.Container}>
                    <div className={Styles.BoxTrail}>
                        <TrailResgistration Cicle={Styles.Cicle} Cicle1={Styles.Cicle} Cicle2={Styles.Cicle1} Fase={Styles.Fase} Divider1={Styles.Divider1} Divider2={Styles.Divider} />
                    </div>
                    <header className={Styles.BoxTitle}>
                        <h1 className={Styles.Titlecolor01}>Informações do <span className={Styles.Span}>cartão</span></h1>
                        <h1 className={Styles.Titlecolor02}>Insira as informações do cartão</h1>
                    </header>
                    <section className={Styles.FormsAndCard}>
                        <article className={Styles.Left}>
                            <div id='formBox' className={Styles.formBox}>
                                <form action='#' method='post' id='form' className={Styles.Forms}> {/*Formulário*/}

                                    <div className={Styles.InputBox}>
                                        <label>Titular*</label><br />
                                        <input type="text" id='name' placeholder='Digite o nome do titular' required />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label>CPF do titular*</label><br />
                                        <input type="char" placeholder='Digite o CPF do titular' required />
                                    </div>

                                    <div className={Styles.toSpaceInput}>
                                        <div className={Styles.InputBox}>
                                            <label>Bandeira*</label><br />
                                            <input type='char' placeholder='Mastercard' required className={Styles.Inputs} />
                                        </div>

                                        <div className={Styles.InputBox}>
                                            <label>Número do cartão*</label><br />
                                            <input type="char" placeholder='Digite o número do cartão' required className={Styles.Inputs} />
                                        </div>
                                    </div>

                                    <div className={Styles.toSpaceInput}>
                                        <div className={Styles.InputBox}>
                                            <label>Segurança*</label><br />
                                            <input type="char" placeholder='Digite o código de segurança' required className={Styles.Inputs} />
                                        </div>

                                        <div className={Styles.InputBox}>
                                            <label>Data de validade*</label><br />
                                            <input type="date" placeholder='Digite a data de validade' required className={Styles.Inputs} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </article>
                        <article className={Styles.Right}>
                            <Card url='/readysystem' produto="Plano: Pechinchas: " price="R$350.00" co2={Styles.co2} price_t="R$350.00" />
                        </article>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default CardDetails;