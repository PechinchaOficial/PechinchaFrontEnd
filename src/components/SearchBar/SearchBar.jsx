import styles from './SearchBar.module.css'
import Produtos from '../../assets/data/bebidasData';
import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {

    const results = React.useRef();


    function ShowResults(){
        results.current.style.display = 'block';
    }
    function HiddenResults(){
        results.current.style.display = 'none';
    }


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    };

    const [search, setSearch] = React.useState('');
    console.log(search);

    const searchLowerCase = search.toLowerCase()

    const products = Produtos.filter((produto) => produto.name.toLocaleLowerCase().includes(searchLowerCase)
    )

    return (
        <div className={styles.search}>


            <input type="search" placeholder='Busque na sua região' className={styles.search_bar} value={search} onChange={(e) => setSearch(e.target.value)}  onMouseOver={ShowResults}/>

            <input type="search" placeholder='Busque na sua região' className={styles.search_bar} value={search} onChange={(e) => setSearch(e.target.value)}  onClick={ShowResults}/>

            <button className={styles.btn} ><i class="fa-solid fa-magnifying-glass"></i></button> 
            <div className={styles.results} ref={results}  onMouseLeave={HiddenResults}>
                <ul>
                    {products.map(({ name, id, qtdUnit, discount, price, dateVenc, img }) => (
                        <li>
                            <div className={styles.img}>
                                <img src={img} alt="Imagem do produto" />
                            </div>

                            <div className={styles.info_prod}>
                                <div className={styles.prod_data}>
                                    <h2>{name}</h2>
                                    <p>Validade: {dateVenc}</p>
                                    <p>{qtdUnit} Unidades restantes</p>
                                    <span className={styles.price}>R${price}</span>

                                </div>
                                <Link to='/cart'>
                                    <button className={styles.btn_buy} onClick={scrollToTop}>
                                        ADICIONAR
                                    </button>
                                </Link>
                            </div>
                        </li>
                    ))}


                </ul>
            </div>
        </div>
    )
}

export default SearchBar;