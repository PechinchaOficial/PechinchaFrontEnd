
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
import Password from './ConsumerPages/RecuperarSenha/Password'
import Product from './ConsumerPages/Product/Product'

import HeaderConsumer from './components/HeaderConsumer/HeaderConsumer'
import MarketProduct from './MarketPages/MarketSystem/MarketProduct/MarketProduct'
import ProductRegistration from './MarketPages/MarketSystem/ProductRegistration/ProductRegistration'
import MarketProductPage from './ConsumerPages/MarketProductPage/MarketProductPage'
import SnacksFilter from './ConsumerPages/ListagemProdutos/FilterProducts/SnacksFilter'
import EnlatadosFilter from './ConsumerPages/ListagemProdutos/FilterProducts/EnlatadosFilter'
import BebidasFilter from './ConsumerPages/ListagemProdutos/FilterProducts/BebidasFilter'
import GraosFilter from './ConsumerPages/ListagemProdutos/FilterProducts/GraosFilter'
import MassasFilter from './ConsumerPages/ListagemProdutos/FilterProducts/MassasFilter'
import HomeDeslogado from './ConsumerPages/Home/HomeDeslogado'
import AboutUsSemLogin from './ConsumerPages/AboutUs/AboutUsSemLogin'
import ListagemDeslogado from './ConsumerPages/ListagemProdutos/ListagemDeslogado'
import HomeMarketDeslogado from './MarketPages/Home/HomeMarketDeslogado'
import UserProfile from './ConsumerPages/UserProfile/UserProfile'
import Usertype from './ConsumerPages/UserType/UserType'
import MarketLogin from './MarketPages/Login/Login'



function RouterApp() {
    return (
        <Router>
           
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/listagem' element={<ListagemProdutos />}></Route>
                <Route path='/homemarket' element={<HomeMarket />}></Route>
                <Route path='/about' element={<AboutUs />}></Route>
                <Route path='/registerMarket' element={<RegisterMarket />}></Route>
                <Route path='/marketSystem' element={<MarketSystem />}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/recover' element={<Password/>}></Route>
                <Route path='/product' element={<Product/>}></Route>

                <Route path='/marketproduct' element={<MarketProduct />}></Route>
                <Route path='/productregistration' element={<ProductRegistration />}></Route>
                <Route path='/marketproductpage' element={<MarketProductPage/>}></Route>
                <Route path='/snacks' element={<SnacksFilter/>}></Route>
                <Route path='/enlatados' element={<EnlatadosFilter/>}></Route>
                <Route path='/bebidas' element={<BebidasFilter/>}></Route>
                <Route path='/graos' element={<GraosFilter/>}></Route>
                <Route path='/massas' element={<MassasFilter/>}></Route>
                <Route path='/homedeslogado' element={<HomeDeslogado/>}></Route>
                <Route path='/aboutusdeslogado' element={<AboutUsSemLogin/>}></Route>
                <Route path='/listagemdeslogado' element={<ListagemDeslogado/>}></Route>
                <Route path='/homemarketdeslogado' element={<HomeMarketDeslogado/>}></Route>

                <Route path='/userprofile' element={<UserProfile/>}></Route>
                <Route path='/usertype' element={<Usertype/>}></Route>
                <Route path='/marketlogin' element={<MarketLogin/>}></Route>

            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterApp