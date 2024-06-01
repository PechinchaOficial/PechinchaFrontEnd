import Styles from './Mission.module.css'
import missao from '../../../assets/img/nossa.missao.png'

function Mission () {
    return(

        <section className={Styles.missao}  id='container'>
           
                <img className={Styles.imagem_missao} src={missao}/>
                <div className={Styles.texto_missao}>
                    <div className={Styles.titulo_missao}></div>
                </div>
                
           
        </section>

    )
}

export default Mission;