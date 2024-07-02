import Home from './ConsumerPages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './ConsumerPages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeMarket from './MarketPages/Home/Home';
import ListagemProdutos from './ConsumerPages/ListagemProdutos/ListagemProdutos';
import AboutUs from './ConsumerPages/AboutUs/AboutUs';
import RegisterMarket from './MarketPages/Register/Register';
import MarketSystem from './MarketPages/MarketSystem/MarketSystem';
import Cart from './ConsumerPages/Cart/Cart.';
import Password from './ConsumerPages/RecuperarSenha/Password';
import Product from './ConsumerPages/Product/Product';
import Code from './ConsumerPages/CodePassword/Code';
import New from './ConsumerPages/NewPassword/new';

import HeaderConsumer from './components/HeaderConsumer/HeaderConsumer';
import MarketProduct from './MarketPages/MarketSystem/MarketProduct/MarketProduct';
import ProductRegistration from './MarketPages/MarketSystem/ProductRegistration/ProductRegistration';
import MarketProductPage from './ConsumerPages/MarketProductPage/MarketProductPage';
import SnacksFilter from './ConsumerPages/ListagemProdutos/FilterProducts/SnacksFilter';
import EnlatadosFilter from './ConsumerPages/ListagemProdutos/FilterProducts/EnlatadosFilter';
import BebidasFilter from './ConsumerPages/ListagemProdutos/FilterProducts/BebidasFilter';
import GraosFilter from './ConsumerPages/ListagemProdutos/FilterProducts/GraosFilter';
import MassasFilter from './ConsumerPages/ListagemProdutos/FilterProducts/MassasFilter';
import HomeDeslogado from './ConsumerPages/Home/HomeDeslogado';
import AboutUsSemLogin from './ConsumerPages/AboutUs/AboutUsSemLogin';
import ListagemDeslogado from './ConsumerPages/ListagemProdutos/ListagemDeslogado';
import HomeMarketDeslogado from './MarketPages/Home/HomeMarketDeslogado';
import UserProfile from './ConsumerPages/UserProfile/UserProfile';
import MarketLogin from './MarketPages/Login/Login';
import RegisterClient from './ConsumerPages/RegisterClient/RegisterClient';
import CheckoutPage from './ConsumerPages/CheckoutPage/CheckoutPage';
import FilterProducts from './ConsumerPages/ListagemProdutos/FilterProducts/FilterProducts';
import ProductForm from './MarketPages/MarketSystem/ProductRegistration/RegisterTest';
import ReadyProduct from './ConsumerPages/ReadyProduct/ReadyProduct';
import UserForm from './MarketPages/MarketSystem/ProductRegistration/RegisterTest';
import CardDetails from './MarketPages/CardDetails/CardDetails';
<<<<<<< HEAD
import HelpProfile from './ConsumerPages/HelpProfile/HelpProfile';
=======
import Analysis from './MarketPages/Analysis/Analysis'
import CarouselReviewClient from './components/CarouselReviewClient/CarouselReviewClient';
>>>>>>> main

function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeDeslogado />} />
                <Route path='/login' element={<Login />} />
                <Route path='/listagem' element={<ListagemProdutos />} />
                <Route path='/homemarket' element={<HomeMarket />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/registerMarket' element={<RegisterMarket />} />
                <Route path='/marketSystem' element={<MarketSystem />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/recover' element={<Password />} />
                {/* <Route path='/product' element={<Product />} /> */}
                <Route path='/Code' element={<Code />} />
                <Route path='/New' element={<New />} />

                {/* Rota para exibir os detalhes do produto */}
                <Route path='/produto/:id' element={<Product />} />

                <Route path='/marketproduct' element={<MarketProduct />} />
                <Route path='/productregistration' element={<ProductRegistration />} />
                <Route path='/marketproductpage' element={<MarketProductPage />} />
                <Route path='/snacks' element={<SnacksFilter />} />
                <Route path='/enlatados' element={<EnlatadosFilter />} />
                <Route path='/bebidas' element={<BebidasFilter />} />
                <Route path='/graos' element={<GraosFilter />} />
                <Route path='/massas' element={<MassasFilter />} />
                <Route path='/home' element={<Home />} />
                <Route path='/aboutusdeslogado' element={<AboutUsSemLogin />} />
                <Route path='/listagemdeslogado' element={<ListagemDeslogado />} />
                <Route path='/homemarketdeslogado' element={<HomeMarketDeslogado />} />
                <Route path='/carouselreviewclient' element={< CarouselReviewClient />} />

                <Route path='/userprofile' element={<UserProfile />} />
                <Route path='/marketlogin' element={<MarketLogin />} />
                <Route path='/registerclient' element={<RegisterClient />} />
                <Route path='/checkoutpage' element={<CheckoutPage />} />
                <Route path='/filterProducts' element={<FilterProducts />} />
                <Route path='/registerteste' element={<UserForm />} />
                <Route path='/readyProduct' element={<ReadyProduct />} />
                <Route path='/carddetails' element={<CardDetails />} />
<<<<<<< HEAD
                <Route path='/help' element={<HelpProfile />} />

=======
                <Route path='/analysis' element={<Analysis />} />
>>>>>>> main
            </Routes>
            <Footer />
        </Router>
    );
}

export default RouterApp;
