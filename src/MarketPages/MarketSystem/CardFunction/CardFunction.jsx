import Styles from './CardFunction.module.css'
import Add_market from '../../../assets/img/Add_card_market.png'
import Cesta from '../../../assets/img/Ingredients.png'

function CardFunction(){
    return(
        <div className={Styles.container}> {/*Div container*/}

           <div className={Styles.container_imagens}> {/*Container das divs para as imagens*/}

                <div className={Styles.img_add}> {/*Div para a img 1*/}
                    <img src={Add_market} alt="imagem de um mais" /> 
                </div>

                <div className={Styles.img_carrinho}> {/*Div para a img 2*/}
                    <img src={Cesta} alt="imagem de uma cesta de compras" />
                </div>

           </div>

           <div className={Styles.container_texto_card}>
                <p className={Styles.texto_card}>Cadastrar Produtos</p>
           </div>

        </div>
    )
}

export default CardFunction;