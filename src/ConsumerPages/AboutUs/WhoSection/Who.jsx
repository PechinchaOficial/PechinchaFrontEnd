import Styles from './Who.module.css'

function Who(){
    return (

        <section className={Styles.container} id='container'>
            <div className={Styles.block_red}>
                <h1 className={Styles.red}>Quem Somos</h1>
            </div>
            <p>Nosso objetivo é unir forças contra o desperdício de alimentos! nascemos para revolucionar a forma como consumimos e a nossa missão é ajudar</p>
        </section>

    )
};

export default Who;