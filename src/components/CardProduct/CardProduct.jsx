import styles from './CardProduct.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function CardProduct({ categoria, nome, img, link, index }) {
    const el = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        
        const delay = index * 0.2; // Adiciona um atraso baseado no índice

        gsap.fromTo(el.current, {
            y: 30,
            opacity: 0,

        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
        });

    }, [index]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };

    const { t } = useTranslation();

    return (
        <div ref={el} className={styles.cardContainer}>
            <div className={styles.card_prod} id={categoria}>
                <div className={styles.img_prod}>
                    <img src={img} alt="Imagem categoria" className={styles.prodImg} />
                </div>
                <h2 className={styles.title_prod}>{nome}</h2>
                <Link to={link} onClick={scrollToTop}>
                    <Button text={t("Eu queroBTN")} />
                </Link>
            </div>
        </div>
    );
}

export default CardProduct;
