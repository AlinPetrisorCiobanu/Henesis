import { useNavigate } from "react-router-dom";
import Nav_bar from "../../components/nav_bar/nav_bar"
import Footer from "../../components/footer/footer"
import "../../assets/style/home_style.css"

const Home = () => {
    const navigate = useNavigate();

    const go_to = (path) => {
        navigate(`/${path}`)
    }

    return (
        <div className="Container">
            <Nav_bar />
            <div className="home">
                <h1>Henesis</h1>
                <h1>Soluciones para todo</h1>
                <div className="menu_home_cards">
                    <div className="card_home" onClick={() => go_to('obra')}>
                        <h2>Obra</h2>
                    </div>
                    <div className="card_home" onClick={() => go_to('reforma')}>
                        <h2>Reforma</h2>
                    </div>
                    <div className="card_home" onClick={() => go_to('fibra')}>
                        <h2>Fibra Optica</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home