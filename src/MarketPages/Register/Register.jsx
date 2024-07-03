
import Header from '../../components/Header/Header';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import TrailResgistration from '../../components/TrailRegistrationMarket/TrailRegistration';
import CardDetails from '../CardDetails/CardDetails';
import Styles from './Register.module.css'
import { Link } from 'react-router-dom'

function RegisterMarket() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };
    return (
        <div>
            <Header />
            <main id='container' className={Styles.ContainerForm}>
            <div className={Styles.BoxTrial}>
                <TrailResgistration Cicle={Styles.Cicle} Cicle1={Styles.Cicle1} Cicle2={Styles.Cicle1} Fase={Styles.Fase} Divider1={Styles.Divider} Divider2={Styles.Divider} />
            </div>
                <div id='titleForm' className={Styles.cabecalho}> {/*Título e subtítulo da página*/}
                    <h1 >Cadastro do <span className={Styles.attention}>mercado</span></h1>
                    <h2 className={Styles.Subtitle}>Insira as informações do estabelecimento</h2>
                </div>


                    
                        <div id='formBox' className={Styles.formBox}> {/*Box do formulário*/}
                            <form action='#' method='post' id='form' className={Styles.Forms}> {/*Formulário*/}

                                <div className={Styles.InputBox}>
                                    <label htmlFor="name">Nome do mercado*</label><br />
                                    <input type="text" id='name' placeholder='Digite o nome do mercado' required />
                                </div>

                                <div className={Styles.InputBox}>
                                    <label htmlFor="email">E-mail*</label><br />
                                    <input type="email" id='email' placeholder='Digite o e-mail do mercado' required />
                                </div>

                                <div className={Styles.toSpaceInput}>
                                    <div className={Styles.InputBox}>
                                        <label htmlFor="password">Senha*</label><br />
                                        <input type="password" id='password' placeholder='Digite uma senha' required className={Styles.Inputs} />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label htmlFor="passwordConfirm">Confirmar senha*</label><br />
                                        <input type="password" id='passwordConfirm' placeholder='Confirme sua senha' required className={Styles.Inputs} />
                                    </div>
                                </div>

                                <div className={Styles.toSpaceInput}>
                                    <div className={Styles.InputBox}>
                                        <label htmlFor="cnpj">CNPJ*</label><br />
                                        <input type="text" id='cnpj' placeholder='Digite o CNPJ' required className={Styles.Inputs} />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label htmlFor="cep">CEP*</label><br />
                                        <input type="text" id='cep' placeholder='Digite o CEP' required className={Styles.Inputs} />
                                    </div>
                                </div>

                                <div className={Styles.toSpaceInput}>
                                    <div className={Styles.InputBox}>
                                        <label htmlFor="state">Estado*</label><br />
                                        <input type="text" id='state' placeholder='Digite o estado' required className={Styles.Inputs} />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label htmlFor="city">Cidade*</label><br />
                                        <input type="text" id='city' placeholder='Digite a cidade' required className={Styles.Inputs} />
                                    </div>
                                </div>

                                <div className={Styles.toSpaceInput}>
                                    <div className={Styles.InputBox}>
                                        <label htmlFor="district">Bairro*</label><br />
                                        <input type="text" id='district' placeholder='Digite o bairro' required className={Styles.Inputs} />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label htmlFor="avenue">Rua*</label><br />
                                        <input type="text" id='avenue' placeholder='Digite a rua' required className={Styles.Inputs} />
                                    </div>
                                </div>

                                <div className={Styles.toSpaceInput}>
                                    <div className={Styles.InputBox}>
                                        <label htmlFor="number">Número*</label><br />
                                        <input type="text" id='number' placeholder='Digite um número de telefone' required className={Styles.Inputs} />
                                    </div>

                                    <div className={Styles.InputBox}>
                                        <label htmlFor="complement">Complemento*</label><br />
                                        <input type="text" id='complement' placeholder='Digite o complemento' required className={Styles.Inputs} />
                                    </div>
                                </div>

                            </form>

                        </div>
                    
                        <div id='titleForm2' className={Styles.cabecalho2}> {/*Título e subtítulo da página*/}
                            <h1 >Selecione a forma de <span className={Styles.attention}>pagamento</span></h1>
                        </div>
 
                            <Link to='/carddetails' className={Styles.Btn}onClick={scrollToTop}>
                                    Cartão   
                            </Link>
                            <Link to='/carddetails' className={Styles.Btn}>
                                    PIX
                            </Link>

                  
               
            </main>
        </div>
    )

}

export default RegisterMarket;