import React, { useEffect, useState } from 'react';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import CategoriaProduto from '../ListagemProdutos/CategoriaProduto/CategoriaProduto';
import Styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { GetProdutoById } from '../../services/ProdutoService';
import localData from '../../assets/data/localData';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Product() {
    const { id } = useParams(); 
    const [produto, setProduto] = useState(null); 

    useEffect(() => {
        fetchProduto(); 
    }, [id]);

    const fetchProduto = async () => {                        // Chamdando o back
        try {           
            console.log("Fetching product with ID:", id);
            const response = await GetProdutoById(id);
            console.log("API response:", response.data);
           setTimeout(()=>{
            setProduto(response.data); 
           }, 1000)
        } catch (error) {
            console.error("Erro ao buscar produto", error);
            const localProduto = localData.find(produto => String(produto.id) === String(id));
            console.log("Local product found:", localProduto);
            setProduto(localProduto);
        }
    };

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
                                {produto ? (   // Imagem vai variar dependendo do produto que vc selecionar
                                    <img src={produto.fotoproduto} alt="imagem do produto" className={Styles.img_product_2} />
                                ) : (
                                    <Skeleton height={100} width={100} />   
                                )}
                            </div>
                        </article>
                        <article className={Styles.BoxRight}>
                            <div className={Styles.Box2}>
                                {produto ? (
                                    <img src={produto.fotoproduto} alt="imagem do produto" className={Styles.img_product} />
                                ) : (
                                    <Skeleton height={212} width={212} />
                                )}
                            </div>
                        </article>
                    </div>
                    <div className={Styles.BackInfo}>
                        <article className={Styles.BoxInfo}>
                            <div className={Styles.InfoLeft}>
                                <div className={Styles.BoxInfoProduct}>
                                    {produto ? (
                                        <>
                                            <h4 className={Styles.titulo_produto}>{produto.nome}</h4>
                                            <h5 className={Styles.sub_titulo_product}>{produto.descricao}</h5>
                                        </>
                                    ) : (
                                        <>
                                            <Skeleton height={30} width={200} />
                                            <Skeleton height={20} width={300} />
                                        </>
                                    )}
                                </div>
                                <div className={Styles.DateValue}>
                                    <div className={Styles.BoxdateValue}>
                                        {produto ? (
                                            <>
                                                <h4 className={Styles.Date}> Vence: {produto.datavalidade} </h4>
                                                <h2 className={Styles.Value}>R$ {produto.preco} </h2>
                                            </>
                                        ) : (
                                            <>
                                                <Skeleton height={20} width={150} />
                                                <Skeleton height={30} width={100} />
                                            </>
                                        )}
                                    </div>
                                    <div className={Styles.BoxDesc}>
                                        <div className={Styles.Desc}>
                                            {produto ? (
                                                <h1>-{produto.desconto}%</h1>
                                            ) : (
                                                <Skeleton height={70} width={80} />
                                            )}
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
                                    <div className={Styles.Values}>
                                        {produto ? (
                                            <p> R$ {(produto.preco / 100).toFixed(2)} </p>
                                        ) : (
                                            <Skeleton height={20} width={50} />
                                        )}
                                    </div>
                                    <div className={Styles.Values}>
                                        {produto ? (
                                            <p> R$ {(produto.preco / 100).toFixed(2)} </p>
                                        ) : (
                                            <Skeleton height={20} width={50} />
                                        )}
                                    </div>
                                </div>
                                <button className={Styles.Btn}>
                                    <p>Finalizar compra</p>
                                </button>
                            </div>
                        </article>
                    </div>
                </article>
                {produto && <CategoriaProduto categoria="Produtos relacionados" />}
            </main>
        </div>
    );
}

export default Product;
