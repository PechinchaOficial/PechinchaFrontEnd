import Banner from '../../../components/Banner/Banner'
import styles from './Filter.module.css'
import imgBanner from '../../../assets/img/banner1.svg';
import MercadosRegiao from '../MercadosRegiao/MercadosRegiao';
import CategoriaProduto from '../CategoriaProduto/CategoriaProduto';
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer';
import snacksData from '../../../assets/data/snacksData'
import CardProduto from '../../../components/CardProduto/CardProduto';
import Graos from '../CategoriaProduto/Graos';


function GraosFilter() {

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list}>

               <div className={styles.container_prod} id='container'>
                    <Graos categoria="Grãos"/>
               </div>
                    
            </main>
        </div>

    )
}

export default GraosFilter