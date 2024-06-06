import Styles from './Mission.module.css'
import missao from '../../../assets/img/nossa.missao.png'

function Mission () {
    return(

        <section className={Styles.missao}  id='container'>
           
                <img className={Styles.imagem_missao} src={missao}/>
                <div className={Styles.texto_missao}>
                    <div className={Styles.titulo_missao}>
                        <h1 className={Styles.mission}>NOSSA MISSÃO</h1>
                    </div>
                    <p className={Styles.text}> Nosso intuito é combater o <span className={Styles.word}> desperdício </span> e a fome. criamos o Pechincha para resolver esse problema e trazer comida para a mesa para as famílias de bem.</p>
                </div>
                
           
        </section>

    )
}

export default Mission;