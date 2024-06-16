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
        <div className={styles.container_card}>
            <CardProduct
                nome={t("Snack")}
                link="/snacks"
                img={snacks} />
            <CardProduct
                categoria='azul'
                nome={t("Enlatados")}
                link="/enlatados"
                img={enlatados} />
            <CardProduct
                nome={t("Graos")}
                img={graos}
                link="/graos"
            />
            <CardProduct
                nome={t("Massas")}
                categoria='azul'
                img={massas}
                link="/massas"
            />
            <CardProduct
                nome={t("Bebidas")}
                link="/bebidas"
                img={bebidas} />
        </div>
    )
}

export default CategoryProd;