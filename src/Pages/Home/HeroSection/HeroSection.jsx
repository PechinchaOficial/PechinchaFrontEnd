import styles from './HeroSection.module.css'
import img from '../../../assets/img/img.svg'

function HeroSection() {
    return (
        <section className={styles.hero_section}>
            <img src={img} alt="logo" className={styles.img_logo}/>
        </section>
    )
}

export default HeroSection;