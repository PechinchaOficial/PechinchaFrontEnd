
import Home from './ConsumerPages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './ConsumerPages/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeMarket from './MarketPages/Home/Home'
import ListagemProdutos from './ConsumerPages/ListagemProdutos/ListagemProdutos'

function RouterApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/listagem' element={<ListagemProdutos />}></Route>
                <Route path='/homemarket' element={<HomeMarket />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterApp