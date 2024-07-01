import Styles from './MarketProduct.module.css'
import Add from '../../../assets/img/Add.png'
import Home from '../../../assets/img/Home_markt.png'
import Produtos from '../../../assets/img/Produtos_market.png'
import Add_Market from '../../../assets/img/Add_market.png'
import Conta from '../../../assets/img/Conta.png'
import Sair from '../../../assets/img/Sair.png'
import Services from '../../../assets/img/Services.png'
import Btn from '../BtnMarket/BtnMarket'
import Table from '../TableMarket/TableMarket'
import HeaderMarket from '../../../components/CardProduct/HeaderMarket/HeaderMarket'
import { Link } from 'react-router-dom';


function MarketSystem(){
    return(
        <div className={Styles.container}>  {/* Container pai*/}
         <HeaderMarket />

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

                <Link to="/MarketSystem">
                <div className={Styles.div_nav}>  {/*Div Nav-bar*/}
                    <div className={Styles.container_central}> {/*Container centralizado*/}
                        <div className={Styles.container_img_nav}> {/*Container da imagem*/}
                            <img src={Home} alt="imagem de uma casa" />
                        </div>

                        <div className={Styles.container_texto_nav}> {/*Texto da nav*/}
                            <p className={Styles.texto_nav}>Pagina Inicial</p>
                        </div>
                    </div>
                </div>
                </Link>

                <Link to="/marketproduct">
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


                        <div className={Styles.container_table}>
                            <Table 
                             classe={Styles.table}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MarketSystem;