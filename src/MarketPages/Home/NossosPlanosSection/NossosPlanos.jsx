import Styles from './NossosPlanos.module.css'

function NossosPlanos() {
    return (
        <section className={Styles.Background}>
            <article className={Styles.BoxUp}>
                <div className={Styles.BackgroundText}>
                    <h1>Nossos Planos</h1>
                </div>
            </article>
            <article className={Styles.Conteiner}>
            <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> BARATINHO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> MENSAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>19,99 </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Beneficio um</h3></li>
                        <li><h3>Beneficio um</h3></li>
                        <li><h3>Beneficio um</h3></li>
                    </ul>


                    <button className={Styles.Btn}> Selecionar </button>
                    
                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> BARATO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> TRIMESTRAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>19,99 </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Beneficio um</h3></li>
                        <li><h3>Beneficio um</h3></li>
                        <li><h3>Beneficio um</h3></li>
                    </ul>


                    <button className={Styles.Btn}> Selecionar </button>
                    
                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> UM POUCO <br/> SALGADO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> ANUAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>19,99 </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Beneficio um</h3></li>
                        <li><h3>Beneficio um</h3></li>
                        <li><h3>Beneficio um</h3></li>
                    </ul>


                    <button className={Styles.Btn}> Selecionar </button>
                    
                </div>
            </article>
        </section>
    )
}

export default NossosPlanos;