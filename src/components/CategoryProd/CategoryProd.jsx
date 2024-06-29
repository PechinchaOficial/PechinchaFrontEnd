import styles from './CategoryProd.module.css'
import CardProduct from '../CardProduct/CardProduct';
import snacks from '../../assets/img/cheetos.png'
import enlatados from '../../assets/img/enlatados.svg'
import graos from '../../assets/img/graos.svg'
import massas from '../../assets/img/massas.svg'
import bebidas from '../../assets/img/bebidas.svg'
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useRef, useEffect } from 'react';

function CategoryProd() {

    const { t } = useTranslation();

    return (
        <div className={styles.container_card}>

            <CardProduct 
                nome={t("Snack")}
                link="/snacks"
                img={snacks}
            />
            <CardProduct
                categoria='azul'
                nome={t("Enlatados")}
                link="/enlatados"
                img={enlatados}
                delay='200' />
            <CardProduct
                nome={t("Graos")}
                img={graos}
                link="/graos"
                delay='300'
            />
            <CardProduct
                nome={t("Massas")}
                categoria='azul'
                img={massas}
                link="/massas"
                delay='400'
            />
            <CardProduct
                nome={t("Bebidas")}
                link="/bebidas"
                img={bebidas} 
                delay='500'/>

        </div>
    )
}

export default CategoryProd;