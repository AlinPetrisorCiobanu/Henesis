import Nav_bar from "../../components/nav_bar/nav_bar"
import "../../assets/style/home_style.css"
import Footer from "../../components/footer/footer"

const Home = () => {
    return (
        <div>
            <div className="Container">
            <Nav_bar />
                <div className="home">
                    <h1>Henesis</h1>
                    <h1>Soluciones para todo</h1>
                    <div className="menu_home_cards">
                        <div className="card_home"><h2>Obras</h2></div>
                        <div className="card_home"><h2>Reformas</h2></div>
                        <div className="card_home"><h2>Fibra Optica</h2></div>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Home