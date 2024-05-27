import styles from './Mercados.module.css'
import mercadoLogo from '../../../assets/img/mercadodia.svg'
import CardMercado from '../../../components/CardMercado/CardMercado';
import TituloFormato from '../../../components/TituloFormato/TituloFormato';


function Mercados() {


    return (
        <div id="background">
            <section className={styles.mercados} id='conteudo'>

                <TituloFormato 
                categoria='Ja trabalham conosco'/>
                <div className={styles.container_mercados}>

                    <CardMercado
                        logo={mercadoLogo} />

                    <CardMercado
                        logo={mercadoLogo} />

                    <CardMercado
                        logo={mercadoLogo} />

                    <CardMercado
                        logo={mercadoLogo} />
                </div>
            </section>
        </div>
    )
}

export default Mercados;