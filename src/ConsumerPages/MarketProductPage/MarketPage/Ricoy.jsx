import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer'
import MarketPage from './MarketPage'
import Styles from './Ricoy.module.css'
import ricoy from '../../../assets/img/Market/logoricoy.png'
import CategoryProd from '../../../components/CategoryProd/CategoryProd'
import CategoriaProduto from '../../ListagemProdutos/CategoriaProduto/CategoriaProduto'
import Bebidas from '../../ListagemProdutos/CategoriaProduto/Bebidas'
import Enlatados from '../../ListagemProdutos/CategoriaProduto/Enlatados'
import Graos from '../../ListagemProdutos/CategoriaProduto/Graos'
import Massas from '../../ListagemProdutos/CategoriaProduto/Massas'




function Ricoy({img}) {

   
    const categoriaDinamica = 'Grão'
    const bebidas = 'Bebida'
    const massas = 'Massa'
    const enlatados = 'enlatado'
    const snacks = 'snack'

    

    return (

        <div>
            <HeaderConsumer />
            <main>
                <MarketPage banner={Styles.bannermarket} logo={Styles.ricoy} img={ricoy} adress="Bairro Ariston Estela Azevedo, 762" name="Ricoy" product="Produtos: 123" date="anuncia desde: 20/10/2024" star="Vendedor: Premium"/>
          
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

export default Ricoy