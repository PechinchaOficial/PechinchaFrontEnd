import { createUser } from '../../../services/UsuarioService'; // Assumindo que haverá um serviço `createUser` para criar usuários

function UserForm() {
    const [user, setUser] = useState({
        email: 'teste54@gmail.com',
        senha: 'teste002',
        nome: 'José',
        telefone: '(11) 94756-2424',
        datanascimento: '2024-06-20',
        status: 1,
        documento: '476.125.648-66',
        tipo: 'Mercado', // Padrão como Consumidor
        enderecos: [{
            cidade: 'Teste',
            estado: 'SP',
            cep: '06326030',
            bairro: 'Cohab 2',
            rua: 'Rio Branco',
            numero: '31',
            complemento: '19'
        }]
    });

    const [errors, setErrors] = useState([]);

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
                setErrors(error.response.data.errors);
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
                value={user.email}
                onChange={handleChange}
                placeholder="E-mail"
                
            />
            <input
                type="password"
                name="senha"
                value={user.senha}
                onChange={handleChange}
                placeholder="Senha"
                
            />
            <input
                type="text"
                name="nome"
                value={user.nome}
                onChange={handleChange}
                placeholder="Nome"
                
            />
            <input
                type="tel"
                name="telefone"
                value={user.telefone}
                onChange={handleChange}
                placeholder="Telefone"
                
            />
            <input
                type="date"
                name="datanascimento"
                value={user.datanascimento}
                onChange={handleChange}
                
            />
            <input
                type="text"
                name="documento"
                value={user.documento}
                onChange={handleChange}
                placeholder="Documento"
                
            />
            <input
                type="text"
                name="cidade"
                value={user.enderecos[0].cidade}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Cidade"
                
            />
            <input
                type="text"
                name="estado"
                value={user.enderecos[0].estado}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Estado"
                
            />
            <input
                type="text"
                name="cep"
                value={user.enderecos[0].cep}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="CEP"
                
            />
            <input
                type="text"
                name="bairro"
                value={user.enderecos[0].bairro}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Bairro"
                
            />
            <input
                type="text"
                name="rua"
                value={user.enderecos[0].rua}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Rua"
                
            />
            <input
                type="text"
                name="numero"
                value={user.enderecos[0].numero}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Número"
                
            />
            <input
                type="text"
                name="complemento"
                value={user.enderecos[0].complemento}
                onChange={(e) => handleEnderecoChange(e, 0)}
                placeholder="Complemento"
            />
            <button type="submit">Cadastrar Usuário</button>
            {errors.length > 0 && (
                <div>
                    <h3>Erros de validação:</h3>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error.defaultMessage}</li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
}

export default UserForm;
