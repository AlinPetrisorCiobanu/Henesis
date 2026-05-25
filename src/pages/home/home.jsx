import Nav_bar from "../../components/nav_bar/nav_bar"
import Footer from "../../components/footer/footer"
import { FaHammer, FaTools, FaNetworkWired } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import { useEffect } from 'react'
import { setMeta } from '../../utils/seo'

const Home = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        setMeta({
            title: 'Henesis — Reformas y Construcción en Madrid',
            description: 'Reformas integrales, obra nueva y rehabilitación. Presupuestos personalizados y garantía de calidad en Madrid.'
        })
    }, [])

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

            {/* POR QUE ELEGIRNOS */}

            <section className="why_choose">
                <h2>Por qué elegir Henesis</h2>
                <ul>
                    <li><strong>Experiencia comprobada:</strong> equipo técnico con más de 10 años en reformas y obra.</li>
                    <li><strong>Soluciones a medida:</strong> diseño, gestión de obra y entrega llave en mano.</li>
                    <li><strong>Transparencia:</strong> presupuestos detallados y comunicación durante todo el proyecto.</li>
                    <li><strong>Garantía:</strong> materiales certificados y garantía de ejecución.</li>
                </ul>
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