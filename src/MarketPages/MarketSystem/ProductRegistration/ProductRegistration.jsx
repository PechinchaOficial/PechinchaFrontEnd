import Styles from './ProductRegistration.module.css'
import Add from '../../../assets/img/Add.png'
import Home from '../../../assets/img/Home_markt.png'
import Produtos from '../../../assets/img/Produtos_market.png'
import Add_Market from '../../../assets/img/Add_market.png'
import Conta from '../../../assets/img/Conta.png'
import Sair from '../../../assets/img/Sair.png'
import Services from '../../../assets/img/Services.png'
import Btn from '../BtnMarket/BtnMarket'
import Table from '../TableMarket/TableMarket'
import salgadinho from '../../../assets/img/salgadinho.png'
import HeaderMarket from '../../../components/CardProduct/HeaderMarket/HeaderMarket'
import { Link } from 'react-router-dom'

function MarketSystem({ imagem, classe }) {
    return (
        <div>
            <HeaderMarket />
            <div className={Styles.container}>  {/* Container pai*/}

                <nav className={Styles.side_bar}>  {/*Nav-bar lateral */}

                    <div className={Styles.div_mercado}> {/* Div que mostra o nome e a imagem do mercado*/}

                        <div className={Styles.imagem_mercado}> {/* Imagem do mercado */}

                        </div>

                        <div className={Styles.nome_mercado}> {/* Div para o nome do mercado */}
                            <h2 className={Styles.titulo_mercado}>Mercado Todo dia</h2>
                            <p className={Styles.nome_responsavel}>Responsavel</p>
                        </div>
                    </div>

                    <div className={Styles.container_btn}> {/*Container para o btn*/}
                        <Link to="/productregistration">
                            <button className={Styles.btn_cds_produto}> {/*Btn para cadastrar produto*/}
                                <div className={Styles.conteudo_btn}> {/*Conteudo do btn*/}

                                    <div className={Styles.container_img_add}> {/*Container imagem add*/}
                                        <img src={Add} alt="imagem de um mais" />
                                    </div>


                                    <div className={Styles.container_texto_cadastro}> {/*Texto cadastro*/}
                                        <p className={Styles.texto_cadastro}>Cadastrar Produto</p>
                                    </div>

                                </div>
                            </button>
                        </Link>
                    </div>

                    <div className={Styles.div_nav}>  {/*Div Nav-bar*/}
                        <Link to='/marketSystem' className={Styles.container_central}>
                            <div className={Styles.container_central}> {/*Container centralizado*/}
                                <div className={Styles.container_img_nav}> {/*Container da imagem*/}
                                    <img src={Home} alt="imagem de uma casa" />
                                </div>

                                <div className={Styles.container_texto_nav}> {/*Texto da nav*/}
                                    <p className={Styles.texto_nav}>Pagina Inicial</p>
                                </div>
                            </div></Link>
                    </div>

                    <Link to='/marketproduct'>
                        <div className={Styles.div_nav}>  {/*Div Nav-bar*/}
                            <div className={Styles.container_central}> {/*Container centralizado*/}
                                <div className={Styles.container_img_nav}> {/*Container da imagem*/}
                                    <img src={Produtos} alt="imagem de uma casa" />
                                </div>

                                <div className={Styles.container_texto_nav}> {/*Texto da nav*/}
                                    <p className={Styles.texto_nav}>Produtos</p>
                                </div>
                            </div>
                        </div>
                    </Link>



                    <div className={Styles.div_nav}>  {/*Div Nav-bar*/}
                        <div className={Styles.container_central}> {/*Container centralizado*/}
                            <div className={Styles.container_img_nav}> {/*Container da imagem*/}
                                <img src={Conta} alt="imagem de uma casa" />
                            </div>

                            <div className={Styles.container_texto_nav}> {/*Texto da nav*/}
                                <p className={Styles.texto_nav}>Minha conta</p>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.div_nav}>  {/*Div Nav-bar*/}
                        <Link to="/" className={Styles.container_central} >
                            <div className={Styles.container_central}> {/*Container centralizado*/}
                                <div className={Styles.container_img_nav}> {/*Container da imagem*/}
                                    <img src={Sair} alt="imagem de uma casa" />
                                </div>

                                <div className={Styles.container_texto_nav}> {/*Texto da nav*/}
                                    <p className={Styles.texto_nav}>Sair</p>
                                </div>
                            </div>
                        </Link>
                    </div>


                </nav>

                <main id="container"> {/*Main*/}
                    <div className={Styles.main}> {/*Container na main*/}
                        <div className={Styles.conteudo_central}> {/*Container oara os conteudos centrais*/}
                            <div className={Styles.container_actions}> {/*Container para btn e barra de pesquisa*/}
                                <Btn imagem={Services} texto="Mais ações" classe={Styles.action} container={Styles.container_btn_action} />
                                <form action="/search" method="get">
                                    <input type="search" name="q" placeholder="Buscar" className={Styles.search_market} />
                                </form>
                            </div>

                            <div className={Styles.container_table}>
                                <div className={Styles.container_form}>

                                    <form action="" method="get">
                                        <p className={Styles.titulo_input}>Nome</p>
                                        <input type="text" placeholder='Digite o nome do produto' className={Styles.input_long} />
                                        <p className={Styles.titulo_input}>Descrição</p>
                                        <input type="text" placeholder='Digite a descrição do produto' className={Styles.input_long} />
                                    </form>

                                    <div className={Styles.inputs}>

                                        <div className={Styles.input}>
                                            <p className={Styles.titulo_input}>Categoria</p>
                                            <select id="categoria" name="categoria" className={Styles.select}>
                                                <option value="massas">Massas</option>
                                                <option value="enlatados">Enlatados</option>
                                                <option value="bebidas">Bebidas</option>
                                                <option value="graos">Grãos</option>
                                                <option value="snacks">Snacks</option>
                                                <option value="outros">Outros</option>
                                            </select>
                                        </div>

                                        <div className={Styles.input}>
                                            <p className={Styles.titulo_input}>Valor inicial</p>
                                            <input type="number" name="valor" id="valor" className={Styles.input_number} />
                                        </div>

                                        <div className={Styles.input}>
                                            <p className={Styles.titulo_input}>% Desconto</p>
                                            <input type="number" name="desconto" id="desconto" className={Styles.input_number} placeholder='%' />
                                        </div>

                                        <div className={Styles.input}>
                                            <p className={Styles.titulo_input}>Validade</p>
                                            <input type="date" className={Styles.date} />
                                        </div>
                                    </div>
                                </div>


                                <div className={Styles.container_img_form}>
                                    <div className={Styles.container_img}>
                                        <img src={salgadinho} className={classe} alt="" />
                                        {/*<img src={salgadinho} className={classe} alt="" />*/}   {/*USA ESSE*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MarketSystem;