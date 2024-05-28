import Banner from '../../components/Banner/Banner'
import styles from './ListagemProdutos.module.css'
import imgBanner from '../../assets/img/banner1.svg';
import MercadosRegiao from './MercadosRegiao/MercadosRegiao';
import CategoriaProduto from './CategoriaProduto/CategoriaProduto';

function ListagemProdutos() {
    return (
        <div className="background">
            <main className="conteudo">
                <div className={styles.margin}>
                    <Banner bannerimg={imgBanner} />
                    <MercadosRegiao />
                    <CategoriaProduto categoria='Massas' />
                    <CategoriaProduto categoria='Enlatados' />
                    <CategoriaProduto categoria='Bebidas' />
                </div>
            </main>
        </div>
    )
}

export default ListagemProdutos