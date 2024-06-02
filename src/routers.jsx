
import Home from './ConsumerPages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './ConsumerPages/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeMarket from './MarketPages/Home/Home'
import ListagemProdutos from './ConsumerPages/ListagemProdutos/ListagemProdutos'
import AboutUs from './ConsumerPages/AboutUs/AboutUs'
import RegisterMarket from './MarketPages/Register/Register'
import MarketSystem from './MarketPages/MarketSystem/MarketSystem'
import Cart from './ConsumerPages/Cart/Cart.'

function RouterApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/listagem' element={<ListagemProdutos />}></Route>
                <Route path='/homemarket' element={<HomeMarket />}></Route>
                <Route path='/about' element={<AboutUs />}></Route>
                <Route path='/registerMarket' element={<RegisterMarket />}></Route>
                <Route path='/marketSystem' element={<MarketSystem />}></Route>
                <Route path='/cart' element={<Cart/>}></Route>

            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterApp