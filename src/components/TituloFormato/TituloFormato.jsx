import styles from './TituloFormato.module.css'

function TituloFormato({categoria}) {
    return (

        <div className={styles.title}>
            <h2>{categoria}</h2>
        </div>

    )
}

export default TituloFormato