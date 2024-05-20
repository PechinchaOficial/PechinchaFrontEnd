import CategorySection from './CategorySection/CategorySection';
import ComoFunciona from './ComoFunciona/ComoFunciona';
import HeroSection from './HeroSection/HeroSection';
import styles from './Home.module.css'
import Promotion from './Promotion/Promotion';

function Home() {
    return (
        <main>
            <HeroSection />
            <CategorySection/>
            <ComoFunciona/>
            <Promotion/>
        </main>
    )
}

export default Home;