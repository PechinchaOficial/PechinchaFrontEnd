import CardProduto from '../../../components/CardProduto/CardProduto';
import styles from './CategoriaProduto.module.css'
import { useRef } from 'react'
import enlatadosData from '../../../assets/data/snacksData'

function Enlatados({ categoria }) {

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }


    return (
        <section className={styles.categoria_produto} id='container'>
            <div className={styles.title}>
                <div className={styles.categoria}>
                    <i class="fa-solid fa-store"></i>
                    <h2>{categoria}</h2>
                </div>

                <div className={styles.filtro}>
                    <h2>Ordenar por <span className={styles.filtro_atual}>Mais relevantes</span> </h2>
                    <i class="fa-solid fa-angle-down" id={styles.arrow}></i>
                </div>
            </div>

            <div className={styles.carousel_prod} ref={carousel}>
                {enlatadosData.map(({name, id, qtdUnit, discount, price, dateVenc, img}) => (
                    <CardProduto key={id}
                    name={name}
                    img={img}
                    qtdUnit={qtdUnit}
                    price={price}
                    discount={discount}
                    dateVenc={dateVenc}/>
                )
                
                    
                )}
            </div>

            <button className={styles.btn_carousel} onClick={handleLeftClick} id={styles.left}><i class="fa-solid fa-chevron-left" ></i></button>
            <button className={styles.btn_carousel} onClick={handleRightClick} id={styles.right}><i class="fa-solid fa-chevron-right" ></i></button>


        </section>
    )
}

export default Enlatados;