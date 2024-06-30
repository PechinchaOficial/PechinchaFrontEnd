import Styles from './Who.module.css'
import TituloFormato from '../../../components/TituloFormato/TituloFormato'
import { useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
function Who(){
    
    useEffect(() => {
        AOS.init({
          duration: 1200, // Duração das animações
        });
      }, []);
    return (

        <section className={Styles.container1} id='container' data-aos="fade-up">
                <TituloFormato categoria='Quem Somos' /> {/*botão vermelho de quem somos*/}
           
            <p className={Styles.text}>Nosso objetivo é unir forças contra o desperdício de alimentos! nascemos para revolucionar a forma como consumimos e a nossa missão é ajudar</p>
        </section>

    )
};

export default Who;