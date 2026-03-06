import { useNavigate } from "react-router-dom"
import Nav_bar from "../../components/nav_bar/nav_bar"
import Footer from "../../components/footer/footer"

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="Container">

            <Nav_bar />

            <section className="hero">

                <div className="hero_overlay"></div>

                <div className="hero_content">

                    <h1>
                        Construimos <span>confianza</span>
                    </h1>

                    <h2>
                        Espacios que inspiran

                    </h2>

                    <p>
                        Soluciones que duran
                    </p>

                    <div className="hero_buttons">

                        <button
                            className="btn_primary"
                            onClick={() => navigate("/contacto")}
                        >
                            Solicitar presupuesto
                        </button>

                        <button
                            className="btn_secondary"
                            onClick={() => navigate("/proyectos")}
                        >
                            Ver proyectos
                        </button>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    )
}

export default Home