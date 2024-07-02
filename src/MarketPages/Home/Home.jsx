
import HeaderConsumer from "../../components/HeaderConsumer/HeaderConsumer";
import FacaParte from "./FacaParteSection/FacaParteSection";
import HeroMarket from "./HeroSection/HeroSection";
import NossosPlanos from "./NossosPlanosSection/NossosPlanos";
import Parcerias from "./ParceriasSection/ParceriasSection";


function HomeMarket() {
    return (
        <main>
            <HeaderConsumer/>
            <HeroMarket />
            <FacaParte />
            <Parcerias />
            <NossosPlanos />
        </main>
    )
}

export default HomeMarket;