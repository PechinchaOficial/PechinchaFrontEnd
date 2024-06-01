import styles from './ComoFunciona.module.css'
import arroz from '../../../assets/img/arroz.svg'
import step from '../../../assets/img/etapa (1).svg'

import React, { useRef } from 'react';
import TituloFormato from '../../../components/TituloFormato/TituloFormato';

function ComoFunciona() {

    const descRef = useRef();
    const titleRef = useRef();


    function alterarConteudo() {
        if (descRef.current ||titleRef.current ) {
            descRef.current.innerHTML = '<p>Sempre que o mercado olgar o produto e nao sei oq sdfgsd sd d sfdffff fdsfsdfdsf   fddf</p>';
            titleRef.current.innerHTML = '2. Como chega os produtos?';

        }
    }
    return (

        <section className='background'>
            <div className={styles.comoFunciona}>
                <TituloFormato categoria='Como funciona?' />

                <div className={styles.container_content}>
                    <article className={styles.passos}>

                        <div className={styles.boxLeft}>
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


                        <h2 className={styles.title} ref={titleRef}>1. Como chega os produtos?</h2>
                        <p className={styles.desc} ref={descRef}>
                            Assim que um produto chegar a uma data próxima de vencimento, ele pode ser adicionado em nossa plataforma pelo mercado.
                        </p>
                    </article>

                    <div className={styles.boxRight}>
                       
                            <img src={step} className={styles.step_img} alt="produto" />
                      
                       
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ComoFunciona;