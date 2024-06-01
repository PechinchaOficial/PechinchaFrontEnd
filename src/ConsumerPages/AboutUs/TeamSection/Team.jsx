import Styles from './Team.module.css'
import Luane from '../../../assets/img/luane.png'
import Jessica from '../../../assets/img/jessica.png'
import Pablo from '../../../assets/img/pablo.png'
import Kaique from '../../../assets/img/kaique.png'
import Gallo from '../../../assets/img/gallo.png'
import Cesar from '../../../assets/img/cesar.png'
import Juan from '../../../assets/img/juan.png'
import Sora from '../../../assets/img/sora.png'

function Team (){
    return (

        <section id='conteudo'>
            <div className={Styles.team}>
                <h1 className={Styles.title_team}>Nossa Equipe</h1>
            </div>
            <div className={Styles.pics}>
                <div className={Styles.square}>
                    <div className={Styles.image}> 
                        <img className={Styles.luane} src={Luane} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Luane Moura</h3>
                          <p>Scrum Master</p>
                          <p>Designer UI/UX</p>
                          <p>Desenvolvedora Front-End</p>
                    </div>
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image}> 
                        <img className={Styles.luane} src={Jessica} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Jessica Magalhães</h3>
                          <p>Product Owner</p>
                          <p>Desenvolvedora Full Stack</p>
                    </div>
                    
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image}> 
                        <img className={Styles.luane} src={Pablo} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Pablo Henrique</h3>
                          <p>Diretor Financeiro</p>
                          <p>Desenvolvedor Full Stack</p>
                    </div>
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image1}> 
                        <img className={Styles.luane} src={Kaique} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Kaique Oliveira</h3>
                          <p>Designer UI/UX</p>
                          <p>Desenvolvedor Front-End</p>
                    </div>
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image1}> 
                        <img className={Styles.luane} src={Gallo} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Gabriel Gallo</h3>
                          <p>Designer UI/UX</p>
                          <p>Desenvolvedor Full Stack</p>
                    </div>
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image1}> 
                        <img className={Styles.luane} src={Cesar} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>César Couto</h3>
                          <p>Desenvolvedor Full Stack</p>
                    </div>
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image2}> 
                        <img className={Styles.luane} src={Juan} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Juan Pina</h3>
                          <p>Desenvolvedor Full Stack</p>
                    </div>
                </div>
                <div className={Styles.square}>
                    <div className={Styles.image2}> 
                        <img className={Styles.luane} src={Sora} />
                    </div>
                    <div className={Styles.name}>
                          <h3 className={Styles.title}>Gabriel Sora</h3>
                          <p>Banco de dados</p>
                          <p>Desenvolvedor Back-End</p>
                    </div>
                </div>
            </div>
        </section>


    )
};

export default Team;