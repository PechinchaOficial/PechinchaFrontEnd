import CardFunction from './CardFunction/CardFunction';
import Styles from './MarketSystem.module.css'

function MarketSystem(){
    return(
        <div className={Styles.container}>

            <nav className={Styles.side_bar}>

            </nav>

            <main id="container">
                <div className={Styles.main}>
                    <CardFunction />
                </div>

            </main>
        </div>
    )
}

export default MarketSystem;