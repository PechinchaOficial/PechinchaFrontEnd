import React, { useState } from 'react';
import { createUser } from '../../../services/UsuarioService'; // Assumindo que haverá um serviço `createUser` para criar usuários

function UserForm() {
    const [user, setUser] = useState({
        email: '',
        senha: '',
        nome: '',
        telefone: '',
        datanascimento: '',
        status: 1,
        documento: '',
        tipo: 'Consumidor', // Padrão como Consumidor
        enderecos: [{
            cidade: '',
            estado: '',
            cep: '',
            bairro: '',
            rua: '',
            numero: '',
            complemento: ''
        }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleEnderecoChange = (e, index) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            enderecos: prevUser.enderecos.map((endereco, idx) => idx === index ? { ...endereco, [name]: value } : endereco)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser(user);
            console.log('Usuário criado com sucesso:', response.data);
        } catch (error) {
            if (error.response) {
                // O servidor retornou uma resposta com status fora da faixa 2xx
                console.error('Erro ao criar usuário:', error.response.data);
                console.error('Status do erro:', error.response.status);
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta
                console.error('Erro de requisição:', error.request);
            } else {
                // Outro tipo de erro ocorreu
                console.error('Erro ao processar requisição:', error.message);
            }
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                defaultValue={user.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
            />
            <input
                type="password"
                name="senha"
                defaultValue={user.senha}
                onChange={handleChange}
                placeholder="Senha"
                required
            />
            <input
                type="text"
                name="nome"
                defaultValue={user.nome}
                onChange={handleChange}
                placeholder="Nome"
                required
            />
            <input
                type="tel"
                name="telefone"
                defaultValue={user.telefone}
                onChange={handleChange}
                placeholder="Telefone"
                required
            />
            <input
                type="date"
                name="datanascimento"
                defaultValue={user.datanascimento}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="documento"
                defaultValue={user.documento}
                onChange={handleChange}
                placeholder="Documento"
                required
            />
            <input
                type="text"
                name="enderecos-cidade"
                defaultValue={user.enderecos[0].cidade}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Cidade"
                required
            />
            <input
                type="text"
                name="enderecos-estado"
                defaultValue={user.enderecos[0].estado}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Estado"
                required
            />
            <input
                type="text"
                name="enderecos-cep"
                defaultValue={user.enderecos[0].cep}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="CEP"
                required
            />
            <input
                type="text"
                name="enderecos-bairro"
                defaultValue={user.enderecos[0].bairro}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Bairro"
                required
            />
            <input
                type="text"
                name="enderecos-rua"
                defaultValue={user.enderecos[0].rua}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Rua"
                required
            />
            <input
                type="text"
                name="enderecos-numero"
                defaultValue={user.enderecos[0].numero}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Número"
                required
            />
            <input
                type="text"
                name="enderecos-complemento"
                defaultValue={user.enderecos[0].complemento}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Complemento"
            />
            <button type="submit">Cadastrar Usuário</button>
        </form>
    );
}

export default UserForm;
