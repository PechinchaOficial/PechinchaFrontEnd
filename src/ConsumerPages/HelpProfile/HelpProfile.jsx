import Styles from './HelpProfile.module.css'
import HeaderConsumer from '../../components/HeaderConsumer/HeaderConsumer';

function HelpProfile() {

    return (
        <div className={Styles.container_profile} >
            <HeaderConsumer />

            <main className={Styles.help_profile} >
                <section className={Styles.container_help} >
                <h2>Ajuda</h2>

                <form action="#" className={Styles.forms_help} >
                    <div className={Styles.input_help} >
                        <div className={Styles.input_profile} >
                            
                        </div>

                    </div>
                </form>

                </section>
            </main>

        </div>
    )

}

export default HelpProfile;