import Styles from './TableMarket.module.css';
import Btn from '../BtnMarket/BtnMarket';
import Cancel from '../../../assets/img/Cancel.png';
import Create from '../../../assets/img/Create.png';
import { GetProduto } from '../../../services/ProdutoService'; // Supondo que você tenha um serviço para obter detalhes do produto
import localData from '../../../assets/data/localData';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TableMarket({ classe }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await GetProduto();
            setProducts(response.data.content);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
            setProducts(localData);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={Styles.container}>
            <table className={classe}>
                <thead className={Styles.cabecalho}>
                    <tr>
                        <th className={Styles.coluna}>ID</th>
                        <th className={Styles.coluna}>Nome</th>
                        <th className={Styles.coluna}>Descrição</th>
                        <th className={Styles.coluna}>Validade</th>
                        <th className={Styles.coluna}>Categoria</th>
                        <th className={Styles.coluna}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((produto) => (
                        <tr key={produto.id}>
                            <td className={Styles.atributo}>{produto.id}</td>
                            <td className={Styles.atributo}>{produto.nome}</td>
                            <td className={Styles.atributo}>{produto.descricao}</td>
                            <td className={Styles.atributo}>{produto.datavalidade}</td>
                            <td className={Styles.atributo}>{produto.categorias}</td>
                            <td className={Styles.atributo}>
                                <div className={Styles.container_bts}>
                                    <Link to={`/atualizar/${produto.id}`}>
                                        <Btn imagem={Create} texto="Editar" classe={Styles.edite} container={Styles.container_img_1} />
                                    </Link>
                                    <Btn imagem={Cancel} texto="Excluir" classe={Styles.delete} container={Styles.container_img_2} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableMarket;
