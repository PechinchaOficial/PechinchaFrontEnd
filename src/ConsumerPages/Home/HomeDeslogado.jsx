import HeaderConsumer from "../../components/Header/Header";
import Home from "./Home"

function HomeDeslogado() {
    return (
        <div>
            <Home
                header={<HeaderConsumer />} />
        </div>
    )
}

export default HomeDeslogado;