import styles from './CategoryProd.module.css'
import CardProduct from '../CardProduct/CardProduct';
import snacks from '../../assets/img/cheetos.png'
import enlatados from '../../assets/img/enlatados.svg'
import graos from '../../assets/img/graos.svg'
import massas from '../../assets/img/massas.svg'
import bebidas from '../../assets/img/bebidas.svg'


function CategoryProd() {
    return ( 
            <div className={styles.container_card}>
                <CardProduct
                nome='Snacks'
                img={snacks}/>
                <CardProduct
                categoria='azul'
                nome='Enlatados'
                img={enlatados}/>
                <CardProduct
                 nome='Grãos'
                 img={graos}/>
                <CardProduct
                nome='Massas'
                categoria='azul'
                img={massas}/>
                <CardProduct
                nome='Bebidas'
                img={bebidas}/>
            </div>
    )
}

export default CategoryProd;