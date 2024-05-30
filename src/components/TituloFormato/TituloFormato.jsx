import styles from './TituloFormato.module.css'

function TituloFormato({categoria}) {
    return (

        <header className={styles.title}>
            <h2>{categoria}</h2>
        </header>

    )
}

export default TituloFormato