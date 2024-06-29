import styles from './TituloFormato.module.css'

function TituloFormato({ categoria }) {
    return (

        <header className={styles.title}>
            {/* Cabeçalho com classe styles.title */}
            <h2>{categoria}</h2> {/* Título h2 renderizado dinamicamente com base na variável 'categoria' */}
        </header>

    )
}

export default TituloFormato