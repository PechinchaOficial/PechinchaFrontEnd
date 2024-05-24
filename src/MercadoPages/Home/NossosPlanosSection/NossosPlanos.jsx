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
                        <h1 className={Styles.Txth1}> Baratinho </h1>
                    </div>
                    <h1 className={Styles.Txt2}> Mensal </h1>
                    <h2 className={Styles.Valor}> R$19,99 </h2>
                    <button className={Styles.Btn}> Selecionar </button>

                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> Baratinho </h1>
                    </div>
                    <h1 className={Styles.Txt2}> Mensal </h1>
                    <h2 className={Styles.Valor}> R$19,99 </h2>
                    <button className={Styles.Btn}> Selecionar </button>

                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> Baratinho </h1>
                    </div>
                    <h1 className={Styles.Txt2}> Mensal </h1>
                    <h2 className={Styles.Valor}> R$19,99 </h2>
                    <button className={Styles.Btn}> Selecionar </button>
                    
                </div>
            </article>
        </section>
    )
}

export default NossosPlanos;