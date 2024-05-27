import TituloFormato from '../../../components/TituloFormato/TituloFormato'
import styles from './Perguntas.module.css'

function Perguntas(){
    return(
        <section className={styles.perguntas} id='conteudo'>
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
    )
}

export default Perguntas