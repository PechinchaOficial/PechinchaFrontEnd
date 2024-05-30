import TituloFormato from '../../../components/TituloFormato/TituloFormato'
import styles from './QuestionsSection.module.css'

function Perguntas(){
    return(
        <div id="background">
        <section className={styles.perguntas} id='container'>
            <TituloFormato
            categoria='Perguntas frequentes'/>
            <div className={styles.container_perguntas}>
                <div className={styles.pergunta}>
                    <h3>A Pechincha é um App de descontos?</h3>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>

                <div className={styles.pergunta}>
                    <h3>A Pechincha é um App de descontos?</h3>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>

                <div className={styles.pergunta}>
                    <h3>A Pechincha é um App de descontos?</h3>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>

                <div className={styles.pergunta}>
                    <h3>A Pechincha é um App de descontos?</h3>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
                

                <div className={styles.pergunta}>
                    <h3>A Pechincha é um App de descontos?</h3>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Perguntas