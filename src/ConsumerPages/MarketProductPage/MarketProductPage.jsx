import CategoryProd from '../../components/CategoryProd/CategoryProd'
import Bebidas from '../ListagemProdutos/CategoriaProduto/Bebidas'
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto'
import Enlatados from '../ListagemProdutos/CategoriaProduto/Enlatados'
import Graos from '../ListagemProdutos/CategoriaProduto/Graos'
import Massas from '../ListagemProdutos/CategoriaProduto/Massas'
import Styles from './MarketProductPage.module.css'


function MarketProductPage(){
    return (

       <main>
         <section className={Styles.marketpage} id='container'>
            <div className={Styles.bannermarket}></div>
            <div className={Styles.infosmarket}>
                <div className={Styles.photomarket}></div>
                
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

    

      

    )
}

export default MarketProductPage