import styles from './ComoFunciona.module.css'
import comoFuncionaImg from '../../../assets/img/comofunciona.svg'
import React, { useRef } from 'react';

function ComoFunciona() {

    const descRef = useRef(null);

    function alterarConteudo() {
      if (descRef.current) {
        descRef.current.innerHTML = '<p>Novo conteúdo HTML</p>';
      }
    }
    return (
        <div className="background">
            <section className={styles.container_tutorial}>
                <div className={styles.passos}>

                    <div className={styles.container_passos}>
                        <div className={styles.passo}>
                            <span>1</span>
                        </div>
                        <div className={styles.passo} onClick={alterarConteudo}>
                            <span>2</span>
                        </div>
                        <div className={styles.passo}>
                            <span>3</span>
                        </div>
                        <div className={styles.passo}>
                            <span>4</span>
                        </div>
                    </div>


                    <h2 className={styles.title}>1. Como chega os produtos?</h2>
                    <p className={styles.desc} ref={descRef}>
                        Assim que um produto chegar a uma data próxima de vencimento, ele pode ser adicionado em nossa plataforma pelo mercado.
                    </p>
                </div>

                <div className={styles.passo_detalhes}>
                    <div className={styles.card_etapa} id={styles.etapa_1}></div>
                    <div className={styles.card_etapa} id={styles.etapa_2}></div>
                    <div className={styles.card_etapa} id={styles.etapa_3}></div>
                </div>
            </section>
        </div>
    )
}

export default ComoFunciona;