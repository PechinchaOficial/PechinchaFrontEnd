import Styles from './TableMarket.module.css';
import Btn from '../BtnMarket/BtnMarket';
import Cancel from '../../../assets/img/Cancel.png';
import Create from '../../../assets/img/Create.png';
import { useParams } from 'react-router-dom';
import { GetProduto } from '../../../services/ProdutoService'; // Supondo que você tenha um serviço para obter detalhes do produto
import localData from '../../../assets/data/localData';
import { useState, useEffect } from 'react';

function TableMarket({ classe }) {
    // Estado para armazenar a lista de produtos e indicar o carregamento
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts(); // Ao montar o componente, busca os produtos
    }, []);

    // Função assíncrona para buscar os produtos
    const fetchProducts = async () => {
        try {
            const response = await GetProduto(); // Chamada ao serviço para obter os produtos
            setProducts(response.data.content); // Atualiza o estado com os produtos obtidos
            setLoading(false); // Marca que o carregamento terminou
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
            setProducts(localData); // Em caso de erro, carrega dados locais
            setLoading(false); // Marca que o carregamento terminou
        }
    };

    // Se ainda estiver carregando, exibe indicador de carregamento
    if (loading) {
        return <div>Carregando...</div>;
    }

    // Renderiza a tabela com os produtos obtidos
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
                    {products.map((produto) => ( // Mapeia os produtos para criar as linhas da tabela
                        <tr key={produto.id}>
                            <td className={Styles.atributo}>{produto.id}</td>
                            <td className={Styles.atributo}>{produto.nome}</td>
                            <td className={Styles.atributo}>{produto.descricao}</td>
                            <td className={Styles.atributo}>{produto.validade}</td>
                            <td className={Styles.atributo}>{produto.categoria}</td>
                            <td className={Styles.atributo}>
                                <div className={Styles.container_bts}>
                                    {/* Botões de editar e excluir */}
                                    <Btn imagem={Create} texto="Editar" classe={Styles.edite} container={Styles.container_img_1} />
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
