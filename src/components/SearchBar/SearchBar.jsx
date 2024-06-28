import styles from './SearchBar.module.css'
import Produtos from '../../assets/data/localData';
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

    const products = Produtos.filter((produto) => produto.nome.toLocaleLowerCase().includes(searchLowerCase)
    )

    return (
        <div className={styles.search}>

        <input type="search" placeholder='Busque na sua região' className={styles.search_bar} value={search} onChange={(e) => setSearch(e.target.value)}  onClick={ShowResults}/>
            <button className={styles.btn} ><i class="fa-solid fa-magnifying-glass"></i></button> 
            <div className={styles.results} ref={results}  onMouseLeave={HiddenResults}>
                <ul>
                    {products.map(({  id, nome, datavalidade, preco, desconto, fotoproduto }) => (
                        <li>
                            <div className={styles.img}>
                                <img src={fotoproduto} alt="Imagem do produto" />
                            </div>

                            <div className={styles.info_prod}>
                                <div className={styles.prod_data}>
                                    <h2>{nome}</h2>
                                    <p>Validade: {datavalidade}</p>
                                    <p> Unidades restantes</p>
                                    <span className={styles.price}>R${preco}</span>

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

export default SearchBar;
