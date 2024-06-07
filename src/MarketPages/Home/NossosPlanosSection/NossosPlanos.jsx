import Styles from './NossosPlanos.module.css'

function NossosPlanos() {
    return (
        <section className={Styles.Background} id='container'>
            <article className={Styles.BoxUp}>
                <div className={Styles.BackgroundText}>
                    <h1>Nossos Planos</h1>
                </div>
            </article>
            <article className={Styles.Conteiner}>
            <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> BARATINHO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> MENSAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>289,<span className={Styles.Cents}>99</span> </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Gerenciamento de Estoque</h3></li>
                        <li><h3>Feedback de Clientes</h3></li>
                        <li><h3>Promoções Personalizadas</h3></li>
                        <li><h3>Alcance padrão</h3></li>
                    </ul>


                    <button className={Styles.Btn}> SELECIONAR </button>
                    
                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> BARATO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> TRIMESTRAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>249,<span className={Styles.Cents}>99</span> </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Gerenciamento de Estoque</h3></li>
                        <li><h3>Promoções Personalizadas</h3></li>
                        <li><h3>Feedback de Clientes</h3></li>
                        <li><h3>Recomendações de produtos</h3></li>
                        <li><h3>Alcance mediano</h3></li>
                    </ul>


                    <button className={Styles.Btn}> SELECIONAR </button>
                    
                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> UM POUCO <br/> SALGADO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> ANUAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>229,<span className={Styles.Cents}>99</span> </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Gerenciamento de Estoque</h3></li>
                        <li><h3>Ánalise de dados</h3></li>
                        <li><h3>Suporte 24/7</h3></li>
                        <li><h3>Promoções Personalizadas</h3></li>
                        <li><h3>Feedback de Clientes</h3></li>
                        <li><h3>Recomendações de Produtos</h3></li>
                    </ul>


                    <button className={Styles.Btn}> SELECIONAR </button>
                    
                </div>
            </article>
        </section>
    )
}

export default NossosPlanos;