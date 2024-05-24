import Styles from "../FacaParteSection/FacaPartemodule.css"

function FacaParte() {
    return (
        <section className={Styles.Background}>
            <article className={Styles.BoxLeft}>
                <h1>FAÇA PARTE DESSA EQUIPE</h1>
                <p>nós somos o app nº1 do Brasil contra o desperdício de alimentos!nascemos para revolucionar a forma como consumimos e a nossa missão.</p>
            </article>
            <article className={Styles.BoxRight}>
                <div className={Styles.BoxB1}></div>
                <div className={Styles.BoxB2}></div>
                <div className={Styles.BoxB3}></div>
                <div className={Styles.BoxB4}></div>
            </article>
        </section>
    )
}
export default FacaParte;