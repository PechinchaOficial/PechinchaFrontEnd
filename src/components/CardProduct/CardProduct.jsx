import styles from './CardProduct.module.css'
import prodImg from '../../assets/img/cheetos.png'
import Button from '../Button/Button';
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useRef, useEffect } from 'react';
function CardProduct({ categoria, nome, img, link, delay }) {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Duração das animações
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      };


    const { t } = useTranslation();
    return (
        <div className={styles.card_prod} id={categoria} data-aos="fade-up" data-aos-delay={delay} >
            <div className={styles.img_prod} >
                <img src={img} alt="Imagem categoria" className={styles.prodImg} />
            </div>
            <h2 className={styles.title_prod}>{nome}</h2>
            <Link to={link} onClick={scrollToTop}>
            <Button
                text={t("Eu queroBTN")} />
            </Link>
        </div>
    )


}

export default CardProduct;