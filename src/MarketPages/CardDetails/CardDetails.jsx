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
                                        <label htmlFor="name">Titular*</label><br />
                                        <input type="text" id='name' placeholder='Digite o nome do mercado' required />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label htmlFor="email">CPF do titular*</label><br />
                                        <input type="email" id='email' placeholder='Digite o e-mail do mercado' required />
                                    </div>

                                    <div className={Styles.toSpaceInput}>
                                        <div className={Styles.InputBox}>
                                            <label htmlFor="password">Bandeira*</label><br />
                                            <input type="password" id='password' placeholder='Digite uma senha' required className={Styles.Inputs} />
                                        </div>

                                        <div className={Styles.InputBox}>
                                            <label htmlFor="passwordConfirm">Número do cartão*</label><br />
                                            <input type="password" id='passwordConfirm' placeholder='Confirme sua senha' required className={Styles.Inputs} />
                                        </div>
                                    </div>

                                    <div className={Styles.toSpaceInput}>
                                        <div className={Styles.InputBox}>
                                            <label htmlFor="cnpj">Segurança*</label><br />
                                            <input type="text" id='cnpj' placeholder='Digite o CNPJ' required className={Styles.Inputs} />
                                        </div>

                                        <div className={Styles.InputBox}>
                                            <label htmlFor="cep">Data de validade*</label><br />
                                            <input type="text" id='cep' placeholder='Digite o CEP' required className={Styles.Inputs} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </article>
                        <article className={Styles.Right}>
                            <Card url='/readyproduct' />
                        </article>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default CardDetails;