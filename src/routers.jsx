
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './Pages/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeMarket from './MercadoPages/Home/Home'

function RouterApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/homemarket' element={<HomeMarket />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterApp