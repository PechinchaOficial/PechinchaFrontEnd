import Styles from './Who.module.css'
import TituloFormato from '../../../components/TituloFormato/TituloFormato'

function Who(){
    return (

        <section className={Styles.container1} id='container'>
                <TituloFormato categoria='Quem Somos' /> {/*botão vermelho de quem somos*/}
           
            <p className={Styles.text}>Nosso objetivo é unir forças contra o desperdício de alimentos! nascemos para revolucionar a forma como consumimos e a nossa missão é ajudar</p>
        </section>

    )
};

export default Who;