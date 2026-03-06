import Nav_bar from "../../components/nav_bar/nav_bar"
import Footer from "../../components/footer/footer"
import { FaHammer, FaTools, FaNetworkWired } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="Container">

            <Nav_bar />

            {/* HERO */}

            <section className="hero">

                <div className="hero_overlay"></div>

                <div className="hero_content">

                    <h1>
                        Construimos <span>confianza</span>
                    </h1>

                    <h2>
                        Reformas, obras y redes con calidad profesional
                    </h2>

                    <div className="hero_buttons">

                        <button
                            className="btn_primary"
                            onClick={()=>navigate("/contacto")}
                        >
                            Solicitar presupuesto
                        </button>

                        <button
                            className="btn_secondary"
                            onClick={()=>navigate("/proyectos")}
                        >
                            Ver proyectos
                        </button>

                    </div>

                </div>

            </section>


            {/* SERVICIOS */}

            <section className="services">

                <h2>Nuestros Servicios</h2>

                <div className="services_grid">

                    <div className="service_card">

                        <FaHammer/>

                        <h3>Reformas</h3>

                        <p>
                            Reformas integrales de viviendas, cocinas,
                            baños y locales comerciales.
                        </p>

                    </div>

                    <div className="service_card">

                        <FaTools/>

                        <h3>Obras</h3>

                        <p>
                            Construcción y rehabilitación de espacios
                            con materiales de alta calidad.
                        </p>

                    </div>

                    <div className="service_card">

                        <FaNetworkWired/>

                        <h3>Redes</h3>

                        <p>
                            Instalaciones eléctricas, redes y soluciones
                            técnicas profesionales.
                        </p>

                    </div>

                </div>

            </section>


            {/* CONTADOR */}

            <section className="stats">

                <div className="stat">
                    <h3>+10</h3>
                    <p>Años de experiencia</p>
                </div>

                <div className="stat">
                    <h3>+300</h3>
                    <p>Proyectos realizados</p>
                </div>

                <div className="stat">
                    <h3>+250</h3>
                    <p>Clientes satisfechos</p>
                </div>

            </section>


            {/* CTA */}

            <section className="cta">

                <h2>
                    ¿Tienes un proyecto en mente?
                </h2>

                <p>
                    Te ayudamos a hacerlo realidad.
                    Pide tu presupuesto sin compromiso.
                </p>

                <button
                    className="btn_primary"
                    onClick={()=>navigate("/contacto")}
                >
                    Solicitar presupuesto
                </button>

            </section>

            <Footer/>

        </div>
    )
}

export default Home