import styles from './TituloFormato.module.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useRef, useEffect } from 'react';

function TituloFormato({ categoria }) {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Duração das animações
        });
      }, []);
    return (

        <header className={styles.title} data-aos="fade-right">
            {/* Cabeçalho com classe styles.title */}
            <h2>{categoria}</h2> {/* Título h2 renderizado dinamicamente com base na variável 'categoria' */}
        </header>

    )
}

export default TituloFormato