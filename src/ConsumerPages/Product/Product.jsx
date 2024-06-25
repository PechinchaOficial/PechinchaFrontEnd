import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto';
import Styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetProdutoById } from '../../services/ProdutoService'; // Supondo que você tenha um serviço para obter detalhes do produto

function Product() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        fetchProduto();
    }, []);

    const fetchProduto = async () => {
        try {
            const response = await GetProdutoById(id); // Função para buscar produto por id
            console.log(response);
            setProduto(response.data); // Define os detalhes do produto no estado local
        } catch (error) {
            console.error("Erro ao buscar produto", error);
        }
    };

    if (!produto) {
        return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto os dados do produto estão sendo carregados
    }

    return (
        <div>
            <HeaderConsumer />
            <main className={Styles.Background} id="container">
                <article className={Styles.Boxtext}>
                    <h1 className={Styles.title}>Finalize seu pedido</h1>
                    <div className={Styles.Subtitlebox}>
                        <div className={Styles.icoHome}> <img src="" alt="icone home" /> </div>
                        <h4 className={Styles.Subtitle}>Rua.Tito N450</h4>
                    </div>
                </article>
                <article className={Styles.ProductsInfo}>
                    <div className={Styles.BackProducts}>
                        <article className={Styles.BoxLeft}>
                            <div className={Styles.Box1}>
                                <img src={produto.imagem} alt="imagem do produto" className={Styles.img_product_2} />
                            </div>
                        </article>
                        <article className={Styles.BoxRight}>
                            <div className={Styles.Box2}>
                                <img src={produto.imagem} alt="imagem do produto" className={Styles.img_product} />
                            </div>
                        </article>
                    </div>
                    <div className={Styles.BackInfo}>
                        <article className={Styles.BoxInfo}>
                            <div className={Styles.InfoLeft}>
                                <div className={Styles.BoxInfoProduct}>
                                    <h4 className={Styles.titulo_produto}>{produto.nome}</h4>
                                    <h5 className={Styles.sub_titulo_product}>{produto.descricao}</h5>
                                </div>
                                <div className={Styles.DateValue}>
                                    <div className={Styles.BoxdateValue}>
                                        <h4 className={Styles.Date}> Vence: {produto.datavalidade} </h4>
                                        <h2 className={Styles.Value}>R$ {produto.preco.toFixed(2)} </h2>
                                    </div>
                                    <div className={Styles.BoxDesc}>
                                        <div className={Styles.Desc}>
                                            <h1>{produto.desconto}%</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.InfoRight}>
                                <div className={Styles.BoxTextProduct}>
                                    <h1>Qtd</h1>
                                    <h1>Valor Un.(R$)</h1>
                                    <h1>Total(R$)</h1>
                                </div>
                                <div className={Styles.BackValuesProduct}>
                                    <div className={Styles.Values}>
                                        <input type="number" placeholder='1' className={Styles.QtdBtn} />
                                    </div>
                                    <div className={Styles.Values}><p> R$ {(produto.preco / 100).toFixed(2)} </p></div>
                                    <div className={Styles.Values}><p> R$ {(produto.preco / 100).toFixed(2)} </p></div>
                                </div>
                                <button className={Styles.Btn}>
                                    <p>Finalizar compra</p>
                                </button>
                            </div>
                        </article>
                    </div>
                </article>
                <CategoriaProduto categoria="Produtos relacionados" />
            </main>
        </div>
    );
}

export default Product;
