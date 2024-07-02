import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer'
import MarketPage from './MarketPage'
import Styles from './Extra.module.css'
import extra from '../../../assets/img/Market/logoExtra.png'
import CategoryProd from '../../../components/CategoryProd/CategoryProd'
import CategoriaProduto from '../../ListagemProdutos/CategoriaProduto/CategoriaProduto'
import Bebidas from '../../ListagemProdutos/CategoriaProduto/Bebidas'
import Enlatados from '../../ListagemProdutos/CategoriaProduto/Enlatados'
import Graos from '../../ListagemProdutos/CategoriaProduto/Graos'
import Massas from '../../ListagemProdutos/CategoriaProduto/Massas'




function Extra({img}) {

   
    const categoriaDinamica = 'Grão'
    const bebidas = 'Bebida'
    const massas = 'Massa'
    const enlatados = 'enlatado'
    const snacks = 'snack'

    

    return (

        <div>
            <HeaderConsumer />
            <main>
                <MarketPage banner={Styles.bannermarket} logo={Styles.extra} img={extra} adress="Bairro Ariston Estela Azevedo, 762" name="Extra" product="Produtos: 123" date="anuncia desde: 20/10/2024" star="Vendedor: Premium"/>
          
                <div className={Styles.containerproduct} id='container'>
                    <CategoryProd />
                <CategoriaProduto categoria='Snacks' category={snacks} />
                <CategoriaProduto categoria='Bebida' category={bebidas} />
                <CategoriaProduto categoria='Grãos' category={categoriaDinamica} />
                <CategoriaProduto categoria='Massas' category={massas} />
                <CategoriaProduto categoria='Enlatados' category={enlatados} />
                </div>
            </main>
        </div>




    )
}

export default Extra