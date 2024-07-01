import Banner from '../../components/Banner/Banner'
import styles from './ListagemProdutos.module.css'
import imgBanner from '../../assets/img/banner.svg';
import MercadosRegiao from './MercadosRegiao/MercadosRegiao';
import CategoriaProduto from './CategoriaProduto/CategoriaProduto';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import bannerc from '../../assets/img/bannerc.png'
import Bannerverde from '../../assets/img/bannerverde.png'
import Bannerjunina from '../../assets/img/bannerjunina.png'

function ListagemProdutos() {

    const categoriaDinamica = 'Grão'
    const bebidas = 'Bebida'
    const massas = 'massa'
    const enlatados = 'enlatado'
    const snacks = 'snack'


    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list}>
            <Banner bannerimg={imgBanner} bannerc={bannerc} bannerverde={Bannerverde} bannerjunino={Bannerjunina} /> {/* Banner de promoções */}
                <MercadosRegiao />
                <CategoriaProduto categoria='Snacks' category={snacks}
                show_more='/snacks' />
                <CategoriaProduto categoria='Bebida' category={bebidas} 
              show_more='/bebidas' />
                <CategoriaProduto categoria='Grãos' category={categoriaDinamica}
                  show_more='/graos' />
                <CategoriaProduto categoria='Massas' category={massas} 
                 show_more='/massas' />
                <CategoriaProduto categoria='Enlatados' category={enlatados}
                 show_more='/enlatados' />
            </main>
        </div>

    )
}

export default ListagemProdutos