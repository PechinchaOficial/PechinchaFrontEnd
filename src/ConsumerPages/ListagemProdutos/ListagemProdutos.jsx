import Banner from '../../components/Banner/Banner'
import styles from './ListagemProdutos.module.css'
import imgBanner from '../../assets/img/banner1.svg';
import MercadosRegiao from './MercadosRegiao/MercadosRegiao';
import CategoriaProduto from './CategoriaProduto/CategoriaProduto';
import Graos from './CategoriaProduto/Graos';
import Bebidas from './CategoriaProduto/Bebidas';
import Enlatados from './CategoriaProduto/Enlatados';
import Massas from './CategoriaProduto/Massas';

function ListagemProdutos() {

    
    return (
        <main className={styles.prod_list}>
                <Banner bannerimg={imgBanner} />
                <MercadosRegiao />
                <CategoriaProduto categoria='Snacks' />
                <Graos categoria='Grãos'/>
                <Bebidas categoria="Bebidas"/>  
                <Enlatados categoria="Enlatados"/>
                <Massas categoria="Massas"/>
        </main>

    )
}

export default ListagemProdutos