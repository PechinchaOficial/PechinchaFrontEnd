import styles from './CardProduto.module.css'
import { Link } from 'react-router-dom';


function CardProduto({ img, name, price, dateVenc, qtdUnit, discount }) {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      };


    return (
        <div className={styles.cardproduto}>
            
                <div className={styles.container_img} onClick={scrollToTop} >
                    <img src={img} alt="Produto" className={styles.imgprod} />
                </div>
           
            <h2 className={styles.prodNome}>{name}</h2>
            <div className={styles.prod_info}>
                <span className={styles.info_prod}>
                    Data: até {dateVenc}
                </span>

                <span className={styles.info_prod}>
                    {qtdUnit} Unidades restantes
                </span>

            </div>

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

            <Link to='/cart'>
                <button className={styles.btn} onClick={scrollToTop}>
                    ADICIONAR
                </button>
            </Link>
        </div>
    )
}

export default CardProduto;