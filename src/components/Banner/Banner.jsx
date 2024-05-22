import styles from './Banner.module.css'

function Banner({bannerimg}) {
    return (
        <div className={styles.banner}>
            <img src={bannerimg} alt="Banner Promocional" className={styles.img_banner} />
        </div>
    )
}

export default Banner;