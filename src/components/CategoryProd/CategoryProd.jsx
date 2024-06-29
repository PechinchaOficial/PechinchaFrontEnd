import styles from './CategoryProd.module.css';
import CardProduct from '../CardProduct/CardProduct';
import snacks from '../../assets/img/cheetos.png';
import enlatados from '../../assets/img/enlatados.svg';
import graos from '../../assets/img/graos.svg';
import massas from '../../assets/img/massas.svg';
import bebidas from '../../assets/img/bebidas.svg';
import { useTranslation } from "react-i18next";

function CategoryProd() {
    const { t } = useTranslation();

    const products = [
        { nome: t("Snack"), link: "/snacks", img: snacks },
        { nome: t("Enlatados"), link: "/enlatados", img: enlatados, categoria: 'azul' },
        { nome: t("Graos"), link: "/graos", img: graos },
        { nome: t("Massas"), link: "/massas", img: massas, categoria: 'azul' },
        { nome: t("Bebidas"), link: "/bebidas", img: bebidas },
    ];

    return (
        <div className={styles.container_card}>
            {products.map((product, index) => (
                <CardProduct
                    key={index}
                    index={index}
                    nome={product.nome}
                    link={product.link}
                    img={product.img}
                    categoria={product.categoria}
                />
            ))}
        </div>
    );
}

export default CategoryProd;
