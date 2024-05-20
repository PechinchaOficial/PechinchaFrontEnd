import styles from './ComoFunciona.module.css'
import comoFuncionaImg from '../../../assets/img/comofunciona.svg'

function ComoFunciona() {
    return (
        <div className="background">
            <section className={styles.container_tutorial}>
                <div className={styles.passos}>

                    <div className={styles.container_passos}>
                        <div className={styles.passo}>
                            <span>1</span>
                        </div>
                        <div className={styles.passo}>
                            <span>2</span>
                        </div>
                        <div className={styles.passo}>
                            <span>3</span>
                        </div>
                        <div className={styles.passo}>
                            <span>4</span>
                        </div>
                    </div>


                    <h2 className={styles.title}>1. Como chega os produtos?</h2>
                    <p className={styles.desc}>
                        Assim que um produto chegar a uma data próxima de vencimento, ele pode ser adicionado em nossa plataforma pelo mercado.
                    </p>
                </div>

                <img src={comoFuncionaImg} alt="" className={styles.comofuncionaimg} />
            </section>
        </div>
    )
}

export default ComoFunciona;