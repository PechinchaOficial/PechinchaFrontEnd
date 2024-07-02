import Styles from './CardCheckout.module.css'
import { Link } from 'react-router-dom'

// Card de resumo do pedido
function CardCheckout({ url, produto, price, price_t, reducao, co2 }) {
    return (


        // Container principal
        <div className={Styles.total}>
            <h2 className={Styles.container_titulo}>Resumo da compra</h2>

            <div className={Styles.container_1}>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_produto}>{produto}</h4>
                    <span className={Styles.price_produto}>{price} </span>
                </div>
            </div>

            <div className={co2}>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_produto}>Redução de <span className={Styles.co2}>CO2: </span></h4>
                    <span className={Styles.price_produto}>{reducao}</span>
                </div>
            </div>

            <div className={Styles.container}>
                <div className={Styles.total_info}>
                    <h4 className={Styles.texto_total}>Total:</h4>
                    <span className={Styles.price}>{price_t} </span>
                </div>
            </div>

            {/* Link com um props para trocar de URL onde eu chamar esse componente */}

            <Link to={url}>
                <button className={Styles.btn}>
                    FINALIZAR PAGAMENTO
                </button></Link>
        </div>
    )
}

export default CardCheckout