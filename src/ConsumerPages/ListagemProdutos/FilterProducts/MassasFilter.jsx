import Banner from '../../../components/Banner/Banner'
import styles from './Filter.module.css'
import imgBanner from '../../../assets/img/banner1.svg';
import MercadosRegiao from '../MercadosRegiao/MercadosRegiao';
import CategoriaProduto from '../CategoriaProduto/CategoriaProduto';
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer';
import snacksData from '../../../assets/data/snacksData'
import CardProduto from '../../../components/CardProduto/CardProduto';
import Graos from '../CategoriaProduto/Graos';
import Massas from '../CategoriaProduto/Massas';


function MassasFilter() {
    const categoriaDinamica = 'Grão'
    const bebidas = 'Bebida'
    const massas = 'Massa'
    const enlatados = 'enlatado'
    const snacks = 'Snack'
    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list}>

               <div className={styles.container_prod} id='container'>
                <CategoriaProduto categoria='Massas' category={massas} />
               </div>
                    
            </main>
        </div>

    )
}

export default MassasFilter