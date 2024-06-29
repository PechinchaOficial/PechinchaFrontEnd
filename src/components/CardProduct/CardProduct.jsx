import styles from './CardProduct.module.css'
import prodImg from '../../assets/img/cheetos.png'
import Button from '../Button/Button';
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";

function CardProduct({ categoria, nome, img, link }) {

// Função que rola a janela para o topo
const scrollToTop = () => {
    window.scrollTo({
        top: 0, // Rola até o topo da página
        behavior: "auto" // A rolagem ocorre instantaneamente
    });
};

// Usa o hook useTranslation para obter a função de tradução t
const { t } = useTranslation();

// Retorna o JSX do componente
return (
    <div className={styles.card_prod} id={categoria}>
        {/* Div que contém a imagem do produto */}
        <div className={styles.img_prod}>
            <img src={img} alt="Imagem categoria" className={styles.prodImg} />
        </div>
        {/* Título do produto */}
        <h2 className={styles.title_prod}>{nome}</h2>
        {/* Link que envolve o botão, quando clicado chama scrollToTop */}
        <Link to={link} onClick={scrollToTop}>
            <Button text={t("Eu queroBTN")} />
        </Link>
    </div>
);

}

export default CardProduct;