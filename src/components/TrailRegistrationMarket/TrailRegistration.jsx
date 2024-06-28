import Styles from './TrailRegistration.module.css'

function TrailResgistration( {Cicle, Cicle1, Cicle2, Divider1, Divider2} ) {
    return (
        <main className={Styles.Background} id='container'>
            <section className={Styles.Container}>
                <div className={Styles.Fase}>
                    <div className={Cicle}>
                        <h1>1</h1>
                    </div>
                    <p>Infomarções do mercado</p>
                </div>

                <div className={Divider1}></div>
                
                <div className={Styles.Fase}>
                    <div className={Cicle1}>
                        <h1>2</h1>
                    </div>
                    <p>Pagamento</p>
                </div>

                <div className={Divider2}></div>

                <div className={Styles.Fase}>
                    <div className={Cicle2}>
                        <h1>3</h1>
                    </div>
                    <p>Finalização</p>
                </div>
            </section>
        </main>
    )
}

export default TrailResgistration;