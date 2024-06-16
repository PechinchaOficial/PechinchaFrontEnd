import Styles from './Picture.module.css'
import Pechincha from '../../../assets/img/Pechincha.jpeg'
import Pechinchinha from '../../../assets/img/Pechincha2.jpeg'
import Professores from '../../../assets/img/Pechincha1.jpeg'
import Triade from '../../../assets/img/Triade.jpeg'
import Meninos from '../../../assets/img/meninos.jpeg'
import Full from '../../../assets/img/full.jpeg'


function Picture() {
    return (
        <div className={Styles.margin}>
            <section className={Styles.block} id='container'>
                <div className={Styles.container_picture}>
                    <div className={Styles.pic}>
                        <img className={Styles.equipe} src={Pechincha} />
                    </div>
                    <div className={Styles.pic1}>
                        <img className={Styles.pechincha} src={Pechinchinha} />
                    </div>
                    <div className={Styles.pic2}>
                        <img className={Styles.triade} src={Triade} />
                    </div>
                    <div className={Styles.pic3}>
                        <img className={Styles.meninos} src={Meninos} />
                    </div>
                    <div className={Styles.pic4}>
                        <img className={Styles.professores} src={Professores} />
                    </div>
                    <div className={Styles.pic5}>
                        <img className={Styles.full} src={Full} />
                    </div>
                </div>

            </section>
        </div>
    )
};

export default Picture;