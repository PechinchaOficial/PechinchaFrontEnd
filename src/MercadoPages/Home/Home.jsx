import FacaParte from "./FacaParteSection/FacaParteSection";
import NossosPlanos from "./NossosPlanosSection/NossosPlanos";
import Parcerias from "./ParceriasSection/ParceriasSection";



function HomeMarket() {
    return (
        <main className='conteudo'>
            <FacaParte />
            <Parcerias />
            <NossosPlanos />
        </main>
    )
}

export default HomeMarket;