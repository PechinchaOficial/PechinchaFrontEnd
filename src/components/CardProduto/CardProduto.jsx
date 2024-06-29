import React from 'react';
import styles from './CardProduto.module.css';
import { Link } from 'react-router-dom';

function CardProduto({ img, name, price, dateVenc, qtdUnit, discount }) {

// Função que rola a janela para o topo
const scrollToTop = () => {
    window.scrollTo({
        top: 0, // Rola até o topo da página
        behavior: "auto" // A rolagem ocorre instantaneamente
    });
};

// Função para limitar caracteres e adicionar três pontos no final
const truncateString = (str, maxLength) => {
    // Verifica se a string é maior que o comprimento máximo permitido
    if (str.length > maxLength) {
        // Se for maior, retorna uma substring limitada ao comprimento máximo, adicionando '...' no final
        return str.substring(0, maxLength) + '...';
    } else {
        // Se não for maior, retorna a string original
        return str;
    }
};


    return (
// Div principal que representa o cartão do produto
<div className={styles.cardproduto}>
    {/* Contêiner da imagem do produto, que rola para o topo quando clicado */}
    <div className={styles.container_img} onClick={scrollToTop}>
        <img src={img} alt="Produto" className={styles.imgprod} />
    </div>
    {/* Nome do produto, truncado para 15 caracteres */}
    <h2 className={styles.prodNome}>{truncateString(name, 15)}</h2>
    {/* Informações adicionais do produto */}
    <div className={styles.prod_info}>
        <span className={styles.info_prod}>
            Data: até {dateVenc}
        </span>
        <span className={styles.info_prod}>
            {qtdUnit} Unidades restantes
        </span>
    </div>
    {/* Seção de preços e descontos */}
    <div className={styles.valores}>
        <span className={styles.preco}>
            R$ {price}
        </span>
        <div className={styles.desconto}>
            <span className={styles.porcentagem}>
                -{discount}
            </span>
        </div>
    </div>
    {/* Link que leva ao carrinho, contendo um botão que rola para o topo ao ser clicado */}
    <Link to='/cart'>
        <button className={styles.btn} onClick={scrollToTop}>
            ADICIONAR
        </button>
    </Link>
</div>

    );
}

export default CardProduto;
