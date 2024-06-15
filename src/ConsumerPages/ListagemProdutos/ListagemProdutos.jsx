import Banner from '../../components/Banner/Banner'
import styles from './ListagemProdutos.module.css'
import imgBanner from '../../assets/img/banner.svg';
import MercadosRegiao from './MercadosRegiao/MercadosRegiao';
import CategoriaProduto from './CategoriaProduto/CategoriaProduto';
import Graos from './CategoriaProduto/Graos';
import Bebidas from './CategoriaProduto/Bebidas';
import Enlatados from './CategoriaProduto/Enlatados';
import Massas from './CategoriaProduto/Massas';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';

function ListagemProdutos() {

    
    return (
        <div>
            <HeaderConsumer/>
        <main className={styles.prod_list}>
                <Banner bannerimg={imgBanner} />
                <MercadosRegiao />
                <CategoriaProduto categoria='Snacks' />
                <Graos categoria='Grãos'/>
                <Bebidas categoria="Bebidas"/>  
                <Enlatados categoria="Enlatados"/>
                <Massas categoria="Massas"/>
        </main>
        </div>

    )
}

export default ListagemProdutos