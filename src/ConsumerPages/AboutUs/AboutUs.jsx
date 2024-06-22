import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';
import Styles from './AboutUs.module.css'
import FuturePlans from './FuturePlans/FuturePlans';
import Mission from './MissionSection/Mission';
import Picture from './PictureSection/Picture';
import Team from './TeamSection/Team';
import Who from './WhoSection/Who';

function AboutUs() {
    return (

        <main className="background" >
            <HeaderConsumer />
            <Picture />
            <Who />
            <Mission />
            <Team />
            <FuturePlans />
        </main>

    )
};

export default AboutUs;

