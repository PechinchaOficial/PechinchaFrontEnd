import styles from './CategoryProd.module.css'
import CardProduct from '../CardProduct/CardProduct';
function CategoryProd() {
    return ( 
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
                nome='Bebidas'/>
            </div>
    )
}

export default CategoryProd;