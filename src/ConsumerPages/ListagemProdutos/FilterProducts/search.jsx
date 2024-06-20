import React from "react";
import './style.css'
import Produtos from './assets/data/Produtos'


export const SearchBar = () => {
    

    const [search, setSearch] = React.useState('');
    console.log(search);

    const searchLowerCase = search.toLowerCase()

    const products = Produtos.filter((produto) => produto.nome.toLocaleLowerCase().includes(searchLowerCase) ||
    // também filtro por preco ou qualquer coisa que eu quiser
    produto.preco.toLocaleLowerCase().includes(searchLowerCase)
)


    return (
        <div className="container">
            <input type="search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />

            <ul className="list">
                {products.map((produto => (
                    <li key={produto.nome}>
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>

                    </li>
                )))}
            </ul>
        </div>
    )
}