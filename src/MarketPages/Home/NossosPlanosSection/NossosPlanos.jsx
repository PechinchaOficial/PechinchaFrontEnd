import Styles from './NossosPlanos.module.css'
import StarRed from '../../../assets/img/StarRed.png'
import StarBlue from '../../../assets/img/StarBlue.png'
import { Link } from 'react-router-dom'


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
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>34,<span className={Styles.Cents}>99</span> </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Gerenciamento de Estoque</h3></li>
                        <li><h3>Feedback de Clientes</h3></li>
                        <li><h3>Promoções Personalizadas</h3></li>
                        <li><h3>Alcance padrão</h3></li>
                    </ul>

                    <button className={Styles.Btn}>
                        <Link to='/registerMarket' className={Styles.BtnLK}>
                            SELECIONAR
                        </Link>
                    </button>

                    <img src={StarBlue} alt='' className={Styles.ImgBlue} />
                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> BARATO </h1>
                    </div>
                    <h1 className={Styles.Txt2}> TRIMESTRAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>79,<span className={Styles.Cents}>99</span> </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Gerenciamento de Estoque</h3></li>
                        <li><h3>Promoções Personalizadas</h3></li>
                        <li><h3>Feedback de Clientes</h3></li>
                        <li><h3>Recomendações de produtos</h3></li>
                        <li><h3>Alcance mediano</h3></li>
                    </ul>

                    <button className={Styles.Btn}>
                        <Link to='/registerMarket' className={Styles.BtnLK}>
                            SELECIONAR
                        </Link>
                    </button>

                </div>
                <div className={Styles.Box}>
                    <div className={Styles.BoxRed}>
                        <h1 className={Styles.Txth1}> Pechinchas</h1>
                    </div>
                    <h1 className={Styles.Txt2}> ANUAL </h1>
                    <h2 className={Styles.Valor}> <span className={Styles.Cifrao}>R$</span>349,<span className={Styles.Cents}>99</span> </h2>
                    <ul className={Styles.Beneficios}>
                        <li><h3>Gerenciamento de Estoque</h3></li>
                        <li><h3>Ánalise de dados</h3></li>
                        <li><h3>Suporte 24/7</h3></li>
                        <li><h3>Promoções Personalizadas</h3></li>
                        <li><h3>Feedback de Clientes</h3></li>
                        <li><h3>Recomendações de Produtos</h3></li>
                    </ul>
                    <img src={StarRed} alt='' className={Styles.Img} />


                    <button className={Styles.Btn}>
                        <Link to='/registerMarket' className={Styles.BtnLK}>
                            SELECIONAR
                        </Link>
                    </button>
                </div>
            </article>
        </section>
    )
}

export default NossosPlanos;