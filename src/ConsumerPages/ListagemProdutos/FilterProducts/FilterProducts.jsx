import Banner from '../../../components/Banner/Banner'
import styles from './Filter.module.css'
import imgBanner from '../../../assets/img/banner1.svg';
import MercadosRegiao from '../MercadosRegiao/MercadosRegiao';
import CategoriaProduto from '../CategoriaProduto/CategoriaProduto';
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer';
import snacksData from '../../../assets/data/snacksData'
import CardProduto from '../../../components/CardProduto/CardProduto';
import Graos from '../CategoriaProduto/Graos';
import { Link } from 'react-router-dom';
import Produtos from '../../../assets/data/bebidasData';
import React from 'react';

function FilterProducts() {
    const [search, setSearch] = React.useState('');
    console.log(search);

    const searchLowerCase = search.toLowerCase()

    const products = Produtos.filter((produto) => produto.name.toLocaleLowerCase().includes(searchLowerCase)

        // || produto.preco.toLocaleLowerCase().includes(searchLowerCase)  também filtro por preco ou qualquer coisa que eu quiser
    )

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list} id='container'>

                <header className={styles.header_filter}>
                    <Link to='/listagem'> <i class="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                    <h2 className={styles.title}>Resultados da pesquisa</h2>
                    <input type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </header>

                <div className={styles.container_prod}>

                    {products.map(({ name, id, qtdUnit, discount, price, dateVenc, img }) => (
                        <CardProduto key={name}
                            name={name}
                            img={img}
                            qtdUnit={qtdUnit}
                            price={price}
                            discount={discount}
                            dateVenc={dateVenc} />
                    )
                    )}

                </div>

            </main>
        </div>

    )
}

export default FilterProducts