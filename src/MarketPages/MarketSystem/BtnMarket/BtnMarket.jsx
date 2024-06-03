import Styles from './BtnMarket.module.css'

function BtnMarket({imagem, texto, classe, container}){
    return(
        <button className={classe}>
            <div className={container}>
                <img src={imagem} alt="" />
            </div>
            <p className={Styles.texto_btn}>{texto}</p>
        </button>
    )
}

export default BtnMarket