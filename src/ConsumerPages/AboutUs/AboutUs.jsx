import Styles from './AboutUs.module.css'
import Mission from './MissionSection/Mission';
import Picture from './PictureSection/Picture';
import Team from './TeamSection/Team';
import Who from './WhoSection/Who';

function AboutUs(){
    return (

        <main className="background" > 
                <Picture/>
                <Who/>
                <Mission/>
                <Team/>
        </main>

    )
};

export default AboutUs;

