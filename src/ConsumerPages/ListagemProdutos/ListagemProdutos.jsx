import Banner from '../../components/Banner/Banner'
import styles from './ListagemProdutos.module.css'
import imgBanner from '../../assets/img/banner.svg';
import MercadosRegiao from './MercadosRegiao/MercadosRegiao';
import CategoriaProduto from './CategoriaProduto/CategoriaProduto';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import bannerc from '../../assets/img/bannerc.png'

function ListagemProdutos() {

    const categoriaDinamica = 'Grão'
    const bebidas = 'Bebida'
    const massas = 'Massa'
    const enlatados = 'enlatado'
    const snacks = 'Snack'


    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list}>
                <Banner bannerimg={imgBanner} bannerc={bannerc} />
                <MercadosRegiao />
                <CategoriaProduto categoria='Snacks' category={snacks} />
                <CategoriaProduto categoria='Bebida' category={bebidas} />
                <CategoriaProduto categoria='Grãos' category={categoriaDinamica} />
                <CategoriaProduto categoria='Massas' category={massas} />
                <CategoriaProduto categoria='Enlatados' category={enlatados} />
            </main>
        </div>

    )
}

export default ListagemProdutos