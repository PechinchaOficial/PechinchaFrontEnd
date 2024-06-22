import Styles from "./FacaParte.module.css";
import Triade from '../../../assets/img/Triade.jpeg'
import Pechincha from '../../../assets/img/Pechincha.jpeg'
import Pechincha1 from '../../../assets/img/Pechincha1.jpeg'
import Pechincha2 from '../../../assets/img/Pechincha2.jpeg'


function FacaParte() {
    return (
        <section className={Styles.Background} id="container">
            <article className={Styles.BoxLeft}>
                <h1 className={Styles.Title}>FAÇA PARTE DESSA EQUIPE</h1>
                <p className={Styles.Text}>nós somos o website nº1 do Brasil contra o desperdício de alimentos! Nascemos para revolucionar a forma como consumimos e a nossa missão.</p>
                <button className={Styles.Btn}>SAIBA MAIS</button>
            </article>
            <article className={Styles.BoxRight}>
                 <div className={Styles.Box} id={Styles.Box1}><img className={Styles.img} height={300} width={260} src={Pechincha} alt="P.O do Pechincha, Scrum Master do Pechincha e o Fincanceiro do Pechincha" /></div>
                <div className={Styles.Box} id={Styles.Box2}><img className={Styles.img} height={400} width={240} src={Triade} alt="Todo o esquadrão do Pechincha" /></div>
                <div className={Styles.Box} id={Styles.Box3}><img className={Styles.img} height={400} width={260} src={Pechincha1} alt="Todo o esquadrão do Pechincha" /></div>
                <div className={Styles.Box} id={Styles.Box4}><img className={Styles.img} height={250} width={260} src={Pechincha2} alt="Todo o esquadrão do Pechincha" /></div>
            </article>
        </section>
    )
}

export default FacaParte;