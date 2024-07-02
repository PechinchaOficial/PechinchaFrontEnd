import Header from '../../components/Header/Header';
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import Styles from './AboutUs.module.css'
import Mission from './MissionSection/Mission';
import Picture from './PictureSection/Picture';
import Team from './TeamSection/Team';
import Who from './WhoSection/Who';

function AboutUsSemLogin() {
    
    return (

        <main className="background" >
            <Header/>
            <Picture />
            <Who />
            <Mission />
            <Team />
        </main>

    )
};

export default AboutUsSemLogin;

