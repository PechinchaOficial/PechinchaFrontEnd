import styles from './CategoryProd.module.css'
import CardProduct from '../CardProduct/CardProduct';
import snacks from '../../assets/img/cheetos.png'
import enlatados from '../../assets/img/enlatados.svg'
import graos from '../../assets/img/graos.svg'
import massas from '../../assets/img/massas.svg'
import bebidas from '../../assets/img/bebidas.svg'
import { useTranslation } from "react-i18next";


function CategoryProd() {

    const { t } = useTranslation();

    return (
// Contêiner principal que envolve todos os cartões de produto
<div className={styles.container_card}>
    {/* Cartão de produto para Snacks */}
    <CardProduct
        nome={t("Snack")}
        link="/snacks"
        img={snacks} 
    />
    {/* Cartão de produto para Enlatados, com categoria azul */}
    <CardProduct
        categoria='azul'
        nome={t("Enlatados")}
        link="/enlatados"
        img={enlatados} 
    />
    {/* Cartão de produto para Grãos */}
    <CardProduct
        nome={t("Graos")}
        img={graos}
        link="/graos"
    />
    {/* Cartão de produto para Massas, com categoria azul */}
    <CardProduct
        nome={t("Massas")}
        categoria='azul'
        img={massas}
        link="/massas"
    />
    {/* Cartão de produto para Bebidas */}
    <CardProduct
        nome={t("Bebidas")}
        link="/bebidas"
        img={bebidas} 
    />
</div>

    )
}

export default CategoryProd;