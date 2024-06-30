import Styles from './Picture.module.css'
import Pechincha from '../../../assets/img/Pechincha.jpeg'
import Pechinchinha from '../../../assets/img/Pechincha2.jpeg'
import Professores from '../../../assets/img/Pechincha1.jpeg'
import Triade from '../../../assets/img/Triade.jpeg'
import Meninos from '../../../assets/img/meninos.jpeg'
import Full from '../../../assets/img/full.jpeg'
import { useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Picture() {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Duração das animações
        });
      }, []);
    return (
        <div className={Styles.margin}>
            <section className={Styles.block} id='container' >
                <div className={Styles.container_picture}>
                    <div className={Styles.pic}data-aos="fade-up">
                        <img className={Styles.equipe} src={Pechincha} />
                    </div>
                    <div className={Styles.pic1} data-aos="fade-up" data-aos-delay="100">
                        <img className={Styles.pechincha} src={Pechinchinha} />
                    </div>
                    <div className={Styles.pic2}data-aos="fade-up" data-aos-delay="200">
                        <img className={Styles.triade} src={Triade} />
                    </div>
                    <div className={Styles.pic3}data-aos="fade-up" data-aos-delay="300">
                        <img className={Styles.meninos} src={Meninos} />
                    </div>
                    <div c0
                    lassName={Styles.pic4}data-aos="fade-up" data-aos-delay="400">
                        <img className={Styles.professores} src={Professores} />
                    </div>
                    <div className={Styles.pic5 } data-aos="fade-up" data-aos-delay="500">
                        <img className={Styles.full} src={Full} />
                    </div>
                </div>

            </section>
        </div>
    )
};

export default Picture;