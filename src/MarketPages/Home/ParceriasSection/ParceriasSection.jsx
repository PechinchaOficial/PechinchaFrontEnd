import Styles from './Parcerias.module.css'
import Motiro from '../../../assets/img/MotiroIco.png'
import Proa from '../../../assets/img/Proa.png'
import Atacadao from '../../../assets/img/Atacadao.png'
import Casabahia from '../../../assets/img/CasaBahia.png'
import Ayumi from '../../../assets/img/Ayumi.png'

function Parcerias() {
    return (
        <section className='background' >
            <div className={Styles.Background} id="container" >
                <article className={Styles.BoxUp}>
                    <h1>Parcerias</h1>
                </article>
                <article className={Styles.BoxDown}>
                    <div className={Styles.Box} id={Styles.Box1}><img className={Styles.img} src={Motiro} alt="Motirõ empresa parceira do Pechincha" /></div>
                    <div className={Styles.Box} id={Styles.Box2}><img className={Styles.img} src={Proa} alt="Proa, a instituição parceira do Pechinhca" /></div>
                    <div className={Styles.Box} id={Styles.Box3}><img className={Styles.img} src={Atacadao} alt="Atacadão empresa parceira do Pechincha" /></div>
                    <div className={Styles.Box} id={Styles.Box4}><img className={Styles.img} src={Casabahia} alt="Casas Bahia empresa parceira do Pechincha" /></div>
                    <div className={Styles.Box} id={Styles.Box5}><img className={Styles.img} src={Ayumi} alt="Ayumi empresa parceira do Pechincha" /></div>
                </article>
            </div>
        </section>

    )
}

export default Parcerias;
