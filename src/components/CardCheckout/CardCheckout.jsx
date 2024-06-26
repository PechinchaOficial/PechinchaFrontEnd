import Styles from './CardCheckout.module.css'
import { Link } from 'react-router-dom'

function CardCheckout({url}) {
    return (
        <div className={Styles.total}>
            <h2 className={Styles.container_titulo}>Resumo da compra</h2>

            <div className={Styles.container_1}>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_produto}>1x Salgadinho Cheetos</h4>
                    <span className={Styles.price_produto}>R$ 2,50</span>
                </div>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_produto}>2x Bolacha Oreo</h4>
                    <span className={Styles.price_produto}>R$ 2,50</span>
                </div>
            </div>

            <div className={Styles.container}>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_co2}>Redução de CO2</h4>
                    <span className={Styles.co2}>2,5Kg</span>
                </div>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_total}>Total:</h4>
                    <span className={Styles.price}>R$ 4,80</span>
                </div>
            </div>

            <Link to={url}>
                <button className={Styles.btn}>
                    FINALIZAR PAGAMENTO
                </button></Link>
        </div>
    )
}

export default CardCheckout