import Styles from './Register.module.css'

function RegisterMarket () {

    return (
        <main id='container' className={Styles.ContainerForm}>

            <div id='titleForm'> {/*Título e subtítulo da página*/}
                <h1>Cadastro do <span className={Styles.attention}>mercado</span></h1>
                <h2>Insira as informações do estabelecimento</h2>
            </div>


            <section id='toSpaceBox' className={Styles.toSpaceBox}> {/*Div para aplicar o space between*/}
                <div id='formBox' className={Styles.formBox}> {/*Box do formulário*/}
                    <form action='#' method='post' id='form'> {/*Formulário*/}

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
                                <input type="password" id='password' placeholder='Digite uma senha' required />
                            </div>

                            <div className={Styles.InputBox}>
                                <label htmlFor="passwordConfirm">Confirmar senha*</label><br />
                                <input type="password" id='passwordConfirm' placeholder='Confirme sua senha' required />
                            </div>
                        </div>

                        <div className={Styles.toSpaceInput}>
                            <div className={Styles.InputBox}>
                                <label htmlFor="cnpj">CNPJ*</label><br />
                                <input type="text" id='cnpj' placeholder='Digite o CNPJ' required />
                            </div>

                            <div className={Styles.InputBox}>
                                <label htmlFor="cep">CEP*</label><br />
                                <input type="text" id='cep' placeholder='Digite o CEP' required />
                            </div>
                        </div>

                        <div className={Styles.toSpaceInput}>
                            <div className={Styles.InputBox}>
                                <label htmlFor="state">Estado*</label><br />
                                <input type="text" id='state' placeholder='Digite o estado' required />
                            </div>

                            <div className={Styles.InputBox}>
                                <label htmlFor="city">Cidade*</label><br />
                                <input type="text" id='city' placeholder='Digite a cidade' required />
                            </div>
                        </div>

                        <div className={Styles.toSpaceInput}>
                            <div className={Styles.InputBox}>
                                <label htmlFor="district">Bairro*</label><br />
                                <input type="text" id='district' placeholder='Digite o bairro' required />
                            </div>

                            <div className={Styles.InputBox}>
                                <label htmlFor="avenue">Rua*</label><br />
                                <input type="text" id='avenue' placeholder='Digite a rua' required />
                            </div>
                        </div>

                        <div className={Styles.toSpaceInput}>
                            <div className={Styles.InputBox}>
                                <label htmlFor="number">Número*</label><br />
                                <input type="text" id='number' placeholder='Digite um número de telefone' required />
                            </div>

                            <div className={Styles.InputBox}>
                                <label htmlFor="complement">Complemento*</label><br />
                                <input type="text" id='complement' placeholder='Digite o complemento' required />
                            </div>
                        </div>

                    </form>

                </div>

               
                <div id='schemeBox' className={Styles.schemeBox}> {/*Box dos planos*/}
                    <h2>Plano</h2>
                    <p>Benefício 1</p>
                    <p>Benefício 2</p>
                    <p>Benefício 3</p>
                    <p>Benefício 4</p>
                    <button type='submit' >Assinar</button>
                </div>    
               
            </section>
        </main>
    )

}

export default RegisterMarket;