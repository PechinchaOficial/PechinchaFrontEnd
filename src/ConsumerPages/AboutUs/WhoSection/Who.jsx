import Styles from './Who.module.css'
import TituloFormato from '../../../components/TituloFormato/TituloFormato'

function Who(){
    return (

        <section className={Styles.container} id='container'>
                <TituloFormato categoria='Quem Somos' />
           
            <p className={Styles.text}>Nosso objetivo é unir forças contra o desperdício de alimentos! nascemos para revolucionar a forma como consumimos e a nossa missão é ajudar</p>
        </section>

    )
};

export default Who;