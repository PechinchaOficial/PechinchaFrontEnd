import Header from "../../components/Header/Header";
import HeaderConsumer from "../../components/HeaderConsumer/HeaderConsumer";
import FacaParte from "./FacaParteSection/FacaParteSection";
import HeroMarket from "./HeroSection/HeroSection";
import NossosPlanos from "./NossosPlanosSection/NossosPlanos";
import Parcerias from "./ParceriasSection/ParceriasSection";


function HomeMarketDeslogado() {
    return (
        <main>
            <Header/>
            <HeroMarket />
            <FacaParte />
            <Parcerias />
            <NossosPlanos />
        </main>
    )
}

export default HomeMarketDeslogado;