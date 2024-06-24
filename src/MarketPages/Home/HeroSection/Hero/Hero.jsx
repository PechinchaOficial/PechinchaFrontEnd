import Styles from './Hero.module.css'

function Hero() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Hero}>
                <h1 className={Styles.TittleBoxBlue}>SEU PRODUTO NÃO VENDEU?</h1>
                <h1 className={Styles.TittleBoxYellow}>PECHINCHA CHEGOU!</h1>
            </div>
        </div>
    )
}

export default Hero;