import Perguntas from './Perguntas/Perguntas';
import CategorySection from './CategorySection/CategorySection';
import ComoFunciona from './ComoFunciona/ComoFunciona';
import HeroSection from './HeroSection/HeroSection';
import styles from './Home.module.css'
import Mercados from './Mercados/Mercados';
import Promotion from './Promotion/Promotion';

function Home() {
    return (
        <main>
            <HeroSection />
            <CategorySection/>
            <ComoFunciona/>
            <Promotion/>
            <Mercados/>
            <Perguntas/>
        </main>
    )
}

export default Home;