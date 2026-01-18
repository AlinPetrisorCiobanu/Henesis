import Nav_bar from "../../components/nav_bar/nav_bar"
import "../../assets/style/home_style.css"

const Home = () => {
    return (
        <div>
            <Nav_bar />
            <div className="Container">
                <div className="home">
                    <h1 className="Home">Página Principal de HENESIS</h1>
                </div>
            </div>
        </div>
    )
}

export default Home