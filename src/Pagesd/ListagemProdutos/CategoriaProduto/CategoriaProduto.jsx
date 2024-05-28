import CardProduto from '../../../components/CardProduto/CardProduto';
import styles from './CategoriaProduto.module.css'

function CategoriaProduto({categoria}) {
    return (
        <section className={styles.categoria_produto}>
            <div className={styles.title}>
                <div className={styles.categoria}>
                <i class="fa-solid fa-store"></i>
                <h2>{categoria}</h2>
                </div>
             
                <div className={styles.filtro}>
                    <h2>Ordenar por <span className={styles.filtro_atual}>Mais relevantes</span> </h2>
                    <i class="fa-solid fa-angle-down" id={styles.arrow}></i>
                </div>
            </div>

            <div className={styles.container_card}>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
            </div>
        </section>
    )
}

export default CategoriaProduto;