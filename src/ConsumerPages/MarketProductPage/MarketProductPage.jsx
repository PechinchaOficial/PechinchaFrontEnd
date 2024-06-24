import CategoryProd from '../../components/CategoryProd/CategoryProd'
import Bebidas from '../ListagemProdutos/CategoriaProduto/Bebidas'
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto'
import Enlatados from '../ListagemProdutos/CategoriaProduto/Enlatados'
import Graos from '../ListagemProdutos/CategoriaProduto/Graos'
import Massas from '../ListagemProdutos/CategoriaProduto/Massas'
import Styles from './MarketProductPage.module.css'
import assai from '../../assets/img/Market/assai.png'
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer'



function MarketProductPage(){
    return (
        
        <div>
            <HeaderConsumer/>
        <main>
            <section className={Styles.marketpage} id='container'>
                <div className={Styles.bannermarket}>
                </div>
                <div className={Styles.infosmarket}>
                    <div className={Styles.photomarket}>
                        <img className={Styles.assai} src={assai} alt="Mercado logo" />
                    </div>
                    <div className={Styles.namemarket}>
                        <h1>Assaí Atacadista</h1>
                        <p className={Styles.adress}>Bairro Ariston Estela Azevedo, 762</p>
                        <p className={Styles.map}>Veja no mapa</p>
                        <div className={Styles.star}>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className={Styles.camps}>
                        <div className={Styles.product}>
                            <p>Produtos: 123</p>
                        </div>
                        <div className={Styles.datestart}>
                            <p>anuncia desde: 20/10/2024</p>
                        </div>
                        <div className={Styles.date}>
                            <p>Vendedor: Premium</p>
                        </div>
                    </div>
                </div>

            </section>
            <div className={Styles.containerproduct} id='container'>
                <CategoryProd/>
                <CategoriaProduto categoria='Snacks' />
                <Graos categoria='Grãos'/>
                <Bebidas categoria="Bebidas"/>  
                <Enlatados categoria="Enlatados"/>
                <Massas categoria="Massas"/>
            </div>
        </main>
       </div>
    

      

    )
}

export default MarketProductPage