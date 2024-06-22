import Styles from './Parcerias.module.css'
import SliderLogo from '../../../components/SliderLogo/Sliderlogo'

function Parcerias() {
    return (
        <section className='background' >
            <div className={Styles.Background} id="container" >
                <article className={Styles.BoxUp}>
                    <h1>Parcerias</h1>
                </article>
                <article className={Styles.BoxDown}>
                    <SliderLogo />
                </article>
            </div>
        </section>

    )
}

export default Parcerias;
