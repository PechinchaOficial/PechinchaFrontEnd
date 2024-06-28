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
import { useState, useEffect } from 'react';
import { GetProduto } from '../../../services/ProdutoService';
import localData from '../../../assets/data/localData'

function FilterProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetProduto();
            setTimeout(() => {
                setProducts(response.data.content);
                setIsLoading(false); // Adicione isso aqui para parar o carregamento após sucesso
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                console.error("Erro ao buscar produtos", error);
                setProducts(localData)
            }, 1000)
        }
    };

    const filteredProducts = products.filter((produto) =>
        produto.nome.toLowerCase().includes('massa')
    );

    // Filtrar os produtos que contêm a palavra "Leite" no nome

    return (
        <div>
            <HeaderConsumer />
            <main className={styles.prod_list} id='container'>

                <header className={styles.header_filter}>
                    <Link to='/listagem'> <i class="fa-solid fa-angle-left"></i> Continuar comprando</Link>
                    <h2 className={styles.title}>Massas</h2>

                </header>

                <div className={styles.container_prod}>

                    {filteredProducts.map(({ id, nome, datavalidade, preco, desconto, fotoproduto }) => (
                        <Link key={id} to={`/produto/${id}`} className={styles.productLink}>
                            <CardProduto key={nome}
                                name={nome}
                                dateVenc={datavalidade}
                                price={preco}
                                discount={desconto}
                                img={fotoproduto} />
                        </Link>
                    )
                    )}

                </div>

            </main>
        </div>

    )
}

export default FilterProducts