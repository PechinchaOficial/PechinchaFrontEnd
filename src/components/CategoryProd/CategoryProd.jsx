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
                link="/snacks"
                img={snacks} />
            <CardProduct
                categoria='azul'
                nome='Enlatados'
                link="/enlatados"
                img={enlatados} />
            <CardProduct
                nome='Grãos'
                img={graos}
                link="/graos"
            />
            <CardProduct
                nome='Massas'
                categoria='azul'
                img={massas}
                link="/massas"
            />
            <CardProduct
                nome='Bebidas'
                link="/bebidas"
                img={bebidas} />
        </div>
    )
}

export default CategoryProd;