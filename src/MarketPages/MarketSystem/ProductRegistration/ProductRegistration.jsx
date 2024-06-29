import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Styles from './ProductRegistration.module.css';
import Add from '../../../assets/img/Add.png';
import Home from '../../../assets/img/Home_markt.png';
import Produtos from '../../../assets/img/Produtos_market.png';
import Conta from '../../../assets/img/Conta.png';
import Sair from '../../../assets/img/Sair.png';
import Services from '../../../assets/img/Services.png';
import salgadinho from '../../../assets/img/salgadinho.png';
import HeaderMarket from '../../../components/CardProduct/HeaderMarket/HeaderMarket';
import Products from '../../../assets/data/localData'; // Substitua pelo caminho correto dos dados de produtos
import { CreateProduto } from '../../../services/ProdutoService'; // Verifique se o caminho do serviço está correto
import Btn from '../BtnMarket/BtnMarket';

function MarketSystem({ imagem, classe }) {
    const results = React.useRef();

    const ShowResults = () => {
        results.current.style.display = 'block';
    };

    const HiddenResults = () => {
        results.current.style.display = 'none';
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };

    const [search, setSearch] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [error, setError] = useState('');

    const searchLowerCase = search.toLowerCase();
    const filteredProducts = Products.filter((produto) =>
        produto.nome.toLowerCase().includes(searchLowerCase)
    );

    const handleProductClick = (nome, fotoproduto) => {
        setSearch(nome);
        setImgUrl(fotoproduto);
        HiddenResults();
    };

    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        preco: '',
        desconto: '',
        datavalidade: '',
        fotoproduto: '',
        categorias: '',
        datacadastro: new Date().toISOString().split('T')[0]
    });

    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await CreateProduto(produto); // Certifique-se de que CreateProduto está definido corretamente no serviço
            console.log('Produto criado com sucesso:', response.data);

            // Definir a mensagem de sucesso e exibir o pop-up
            setSuccessMessage('Produto cadastrado com sucesso!');

            // Redirecionar para a página de listagem após 2 segundos
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/marketproduct');
            }, 2000);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            setError('Algum campo está incorreto.'); // Definir mensagem de erro

        }
    };

    return (
        <div>
            {successMessage && (
                <div className="welcome-popup">
                    {successMessage}
                </div>
            )}
            <HeaderMarket />
            <div className={Styles.container}>
                <nav className={Styles.side_bar}>
                    <div className={Styles.div_mercado}>
                        <div className={Styles.imagem_mercado}></div>
                        <div className={Styles.nome_mercado}>
                            <h2 className={Styles.titulo_mercado}>Mercado Todo dia</h2>
                            <p className={Styles.nome_responsavel}>Responsável</p>
                        </div>
                    </div>
                    <div className={Styles.container_btn}>
                        <Link to="/productregistration">
                            <button className={Styles.btn_cds_produto}>
                                <div className={Styles.conteudo_btn}>
                                    <div className={Styles.container_img_add}>
                                        <img src={Add} alt="imagem de um mais" />
                                    </div>
                                    <div className={Styles.container_texto_cadastro}>
                                        <p className={Styles.texto_cadastro}>Cadastrar Produto</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className={Styles.div_nav}>
                        <Link to='/marketSystem' className={Styles.container_central}>
                            <div className={Styles.container_central}>
                                <div className={Styles.container_img_nav}>
                                    <img src={Home} alt="imagem de uma casa" />
                                </div>
                                <div className={Styles.container_texto_nav}>
                                    <p className={Styles.texto_nav}>Página Inicial</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link to='/marketproduct'>
                        <div className={Styles.div_nav}>
                            <div className={Styles.container_central}>
                                <div className={Styles.container_img_nav}>
                                    <img src={Produtos} alt="imagem de produtos" />
                                </div>
                                <div className={Styles.container_texto_nav}>
                                    <p className={Styles.texto_nav}>Produtos</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className={Styles.div_nav}>
                        <div className={Styles.container_central}>
                            <div className={Styles.container_img_nav}>
                                <img src={Conta} alt="imagem de uma conta" />
                            </div>
                            <div className={Styles.container_texto_nav}>
                                <p className={Styles.texto_nav}>Minha conta</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.div_nav}>
                        <Link to="/" className={Styles.container_central}>
                            <div className={Styles.container_central}>
                                <div className={Styles.container_img_nav}>
                                    <img src={Sair} alt="imagem de sair" />
                                </div>
                                <div className={Styles.container_texto_nav}>
                                    <p className={Styles.texto_nav}>Sair</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </nav>
                <main id="container">
                    <div className={Styles.main}>
                        <div className={Styles.conteudo_central}>
                            {/* <div className={Styles.container_actions}>
                                <Btn imagem={Services} texto="Mais ações" classe={Styles.action} container={Styles.container_btn_action} />

                            </div> */}
                            <div className={Styles.container_table}>
                                <div className={Styles.container_form}>
                                    {successMessage && (
                                        <div className="success-popup">
                                            {successMessage}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <p className={Styles.titulo_input}>Nome</p>
                                        <input
                                            type="text"
                                            name="nome"
                                            placeholder="Digite o nome do produto"
                                            className={Styles.input_long}
                                            value={produto.nome || search}
                                            onChange={(e) => {
                                                handleChange(e);
                                                setSearch(e.target.value);
                                            }}
                                            onClick={ShowResults}
                                        />
                                        <div className={Styles.results} ref={results} onMouseLeave={HiddenResults}>
                                            <ul>
                                                {filteredProducts.map(({ nome, id, datavalidade, fotoproduto }) => (
                                                    <li key={id} onClick={() => handleProductClick(nome, fotoproduto)}>
                                                        <div className={Styles.img}>
                                                            <img src={fotoproduto} alt="Imagem do produto" />
                                                        </div>
                                                        <div className={Styles.info_prod}>
                                                            <div className={Styles.prod_data}>
                                                                <h2>{nome}</h2>
                                                                <p>Validade: {datavalidade}</p>
                                                            </div>

                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className={Styles.titulo_input}>Descrição</p>
                                        <input
                                            type="text"
                                            name="descricao"
                                            placeholder="Digite a descrição do produto"
                                            className={Styles.input_long}
                                            value={produto.descricao}
                                            onChange={handleChange}
                                        />
                                        <p className={Styles.titulo_input} id={Styles.input_hidden}>Imagem</p>
                                        <input
                                            className={Styles.input_long} id={Styles.input_hidden}
                                            type="text"
                                            name="fotoproduto"
                                            placeholder="img"
                                            value={produto.fotoproduto = imgUrl}
                                            readOnly
                                            onChange={(e) => {
                                                handleChange(e);
                                                setSearch(e.target.value);
                                            }}
                                        />
                                        <div className={Styles.inputs}>
                                            <div className={Styles.input}>
                                                <p className={Styles.titulo_input}>Categoria</p>
                                                <select
                                                    id="categorias"
                                                    name="categorias"
                                                    className={Styles.select}
                                                    value={produto.categorias}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Selecione uma categoria</option>
                                                    <option value="massas">Massas</option>
                                                    <option value="enlatados">Enlatados</option>
                                                    <option value="bebidas">Bebidas</option>
                                                    <option value="graos">Grãos</option>
                                                    <option value="snacks">Snacks</option>
                                                    <option value="outros">Outros</option>
                                                </select>
                                            </div>
                                            <div className={Styles.input}>
                                                <p className={Styles.titulo_input}>Valor inicial</p>
                                                <input
                                                    type="number"
                                                    name="preco"
                                                    className={Styles.input_number}
                                                    value={produto.preco}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className={Styles.input}>
                                                <p className={Styles.titulo_input}>% Desconto</p>
                                                <input type="number"
                                                    name="desconto"
                                                    className={Styles.input_number}
                                                    placeholder="%"
                                                    value={produto.desconto}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className={Styles.input}>
                                                <p className={Styles.titulo_input}>Validade</p>
                                                <input
                                                    type="date"
                                                    name="datavalidade"
                                                    className={Styles.date}
                                                    value={produto.datavalidade}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                        </div>

                                        <div className={Styles.btn_error}>
                                            {error && <p className='error-message' id='error'>{error}</p>} {/* Mostrar mensagem de erro se houver */}

                                            <button className={Styles.btn} type="submit">
                                                Cadastrar
                                            </button>
                                        </div>


                                    </form>
                                </div>
                                <div className={Styles.container_img_form}>
                                    <div className={Styles.container_img}>
                                        <img src={imgUrl || salgadinho} className={classe} alt="Imagem do produto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MarketSystem;
