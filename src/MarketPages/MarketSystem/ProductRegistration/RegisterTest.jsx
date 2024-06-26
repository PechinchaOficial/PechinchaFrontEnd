import React, { useState } from 'react';
import { CreateProduto } from '../../../services/ProdutoService';

function ProductForm() {
    const [produto, setProduto] = useState({
        preco: '',
        descricao: '',
        nome: '',
        desconto: '',
        datacadastro: '',
        datavalidade: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await CreateProduto(produto);
            console.log('Produto criado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                placeholder="Nome"
                required
            />
            <input
                type="number"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
                placeholder="Preço"
                required
            />
            <input
                type="text"
                name="descricao"
                value={produto.descricao}
                onChange={handleChange}
                placeholder="Descrição"
                required
            />
            <input
                type="number"
                name="desconto"
                value={produto.desconto}
                onChange={handleChange}
                placeholder="Desconto"
                required
            />
            <input
                type="date"
                name="datacadastro"
                value={produto.datacadastro}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="datavalidade"
                value={produto.datavalidade}
                onChange={handleChange}
                required
            />
            <button type="submit">Cadastrar Produto</button>
        </form>
    );
}

export default ProductForm;
