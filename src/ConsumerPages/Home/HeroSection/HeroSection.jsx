import styles from './HeroSection.module.css'
import slogan from '../../../assets/img/slogan.svg'
import star from '../../../assets/img/star.svg'


function HeroSection() {
    return (
        <section className={styles.hero_section}>
            <div className={styles.container_slogan}>
                <img src={slogan} alt="logo" className={styles.img_logo} />
                div
            </div>
        </section>
    )
}

export default HeroSection;