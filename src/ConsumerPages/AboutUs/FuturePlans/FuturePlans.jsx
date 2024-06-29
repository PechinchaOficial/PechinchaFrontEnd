import Styles from './FuturePlans.module.css'
import Notebook from '../../../assets/img/GroupNotebook.png'
import Entregador from '../../../assets/img/Entregador.png'
import Celular from '../../../assets/img/Celular.png'


function FuturePlans() {
    return (
        <main className={Styles.Background} id='container'>
            <header className={Styles.BoxTitle}>
                <h1 className={Styles.Title}>PRÓXIMAS PECHINCHAS</h1>
            </header>

            <section className={Styles.Conteiner}>
                <div className={Styles.Inovacao}>
                    <header className={Styles.TitleInovacao}> {/*Card Inovação*/}
                        <h1>INOVAÇÃO</h1>
                    </header>
                    <div className={Styles.Boxtext}>
                        <p className={Styles.Text}> Que tal colocarmos no nosso carrinho <span className={Styles.Difere}>futuras novidades?</span> Nós da Pechincha sempre pensamos em trazer melhorias para nossos serviços. </p>
                    </div>
                </div>
            </section>

            <section className={Styles.App}>
                    <div>
                        <img className={Styles.cellphone} src={Celular} alt="Foto de um celular" />
                    </div>
                <article className={Styles.BoxRight}>
                    <div className={Styles.Boxtitle}>
                        <h1>APLICATIVO</h1>           {/*Card App*/}
                    </div>
                    <div className={Styles.BoxtextApp}>
                        <p className={Styles.ptext}>Futuramente, a Pechincha pretende ter um aplicativo, para que nossos consumidores recebam notificações, avisando sobre as ofertas mais próximas.</p>
                    </div>
                </article>
            </section>

            <section className={Styles.Crm}>
                <article className={Styles.left}>
                    <div className={Styles.Backtitle}>             {/*Card Integração com CRM*/}
                        <h1>INTEGRAÇÃO COM CRM</h1>
                    </div>
                    <div >
                        <p className={Styles.ptext1}>Temos planos de integrar nossa plataforma ao CRM do mercado, para que as ofertas cheguem automaticamente em nosso sistema.</p>
                    </div>
                </article>

                    <div>
                        <img className={Styles.laptop} src={Notebook} alt="imagem notebook" />
                    </div>
               
            </section>

            <section className={Styles.ServicoEntrega}>
                    <div className={Styles.BoxIMG}>
                        <img className={Styles.ifood} src={Entregador} alt="imagem entregador" />     {/*Card Serviços de entrega*/}
                    </div>
                    
                <article className={Styles.Rightbox}>
                    <div className={Styles.BoxTitlEntrega}>
                        <h1>SERVIÇOS DE ENTREGA</h1>
                    </div>
                    <div className={Styles.Backtxtentrega}>
                        <p className={Styles.ptext2}>E para maior praticidade do nossos consumidores, pretendemos integrar serviços de entrega, onde o cliente pagará.</p>
                    </div>
                </article>
            </section>

        </main>

    )
}

export default FuturePlans;