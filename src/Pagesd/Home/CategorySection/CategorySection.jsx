import styles from './CategorySection.module.css'
import img from '../../../assets/img/img.svg'
import CardProduct from '../../../components/CardProduct/CardProduct';

function CategorySection() {
    return (
        <section className={styles.categorySection}>

            <div className={styles.text}>
                <h2 className={styles.title}>Mate sua fome por uma <span className={styles.destaque}>Pechincha</span></h2>
                <p className={styles.subtitle}>Escolha uma das categorias abaixo, e economize</p>
            </div>

            <div className={styles.container_card}>
                <CardProduct
                nome='Snacks'/>
                <CardProduct
                categoria='azul'
                nome='Enlatados'/>
                <CardProduct
                 nome='Grãos'/>
                <CardProduct
                nome='Massas'
                categoria='azul'/>
                <CardProduct
                nome='Indefinido'/>
            </div>

        </section>
    )
}

export default CategorySection;