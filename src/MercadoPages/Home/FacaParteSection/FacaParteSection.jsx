import Styles from "./FacaParte.module.css";

function FacaParte() {
    return (
        <section className={Styles.Background}>
            <article className={Styles.BoxLeft}>
                <h1 className={Styles.Title}>FAÇA PARTE DESSA EQUIPE</h1>
                <p className={Styles.Text}>nós somos o app nº1 do Brasil contra o desperdício de alimentos!nascemos para revolucionar a forma como consumimos e a nossa missão.</p>
                <button className={Styles.Btn}>Saiba mais</button>
            </article>
            <article className={Styles.BoxRight}>
                <div className={Styles.Box} id={Styles.Box1}></div>
                <div className={Styles.Box} id={Styles.Box2}></div>
                <div className={Styles.Box} id={Styles.Box3}></div>
                <div className={Styles.Box} id={Styles.Box4}></div>
            </article>
        </section>
    )
}
export default FacaParte;