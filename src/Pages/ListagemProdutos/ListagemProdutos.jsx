import Banner from '../../components/Banner/Banner'
import styles from './ListagemProdutos.module.css'
import imgBanner from '../../assets/img/banner1.svg';
import MercadoCard from './MercadoCard/MercadoCard';

function ListagemProdutos(){
    return(
        <main className="conteudo">
           <Banner
           bannerimg={imgBanner}/>
            <div className={styles.teste}>
                <MercadoCard/>
            </div>
        </main>
    )
}

export default ListagemProdutos