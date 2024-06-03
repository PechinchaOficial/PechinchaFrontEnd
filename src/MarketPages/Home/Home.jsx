import FacaParte from "./FacaParteSection/FacaParteSection";
import HeroMarket from "./HeroSection/HeroSection";
import NossosPlanos from "./NossosPlanosSection/NossosPlanos";
import Parcerias from "./ParceriasSection/ParceriasSection";


function HomeMarket() {
    return (
        <main>
            <HeroMarket />
            <FacaParte />
            <Parcerias />
            <NossosPlanos />
        </main>
    )
}

export default HomeMarket;