import Footer from "../../components/footer/footer"
import Nav_bar from "../../components/nav_bar/nav_bar"

import { useEffect } from 'react'
import { setMeta } from '../../utils/seo'

const Info = () => {
    useEffect(()=>{
        setMeta({
            title: 'Quiénes somos - Henesis',
            description: 'Conoce al equipo de Henesis: experiencia en reformas, obra nueva y mantenimiento. Servicio cercano y garantía de calidad.'
        })
    }, [])

    return (
            <div className="Container">
                <Nav_bar />
                    <div className="division_info">
                        <section className="proyectos_hero">
                            <h1>Quien Somos</h1>
                            <p>Fundadores y nuestra pequeña historia.</p>
                        </section>
                        <section className="info_section">
                            <p>
                                Somos una empresa creada por un grupo de amigos apasionados por las reformas y comprometidos con hacer realidad cada proyecto. Desde nuestros inicios, hemos trabajado con ilusión, esfuerzo y dedicación para ofrecer soluciones de calidad adaptadas a las necesidades de cada cliente.
                            </p>

                            <p>
                                Nuestra trayectoria abarca desde pequeñas reparaciones hasta reformas integrales de viviendas y locales. Cuidamos cada detalle del proceso porque creemos que cada espacio tiene el potencial de transformarse y mejorar significativamente la vida de quienes lo disfrutan.
                            </p>
                            <p>
                                Gracias a nuestro equipo de profesionales especializados y a años de experiencia en el sector, ofrecemos un servicio cercano, transparente y de confianza. La satisfacción de nuestros clientes y sus recomendaciones son nuestra mejor carta de presentación y el motor que nos impulsa a seguir creciendo.
                            </p>

                            <h3>Nuestros valores y servicios</h3>
                            <ul>
                                <li><strong>Reformas integrales:</strong> cocinas, baños, salones y viviendas completas.</li>
                                <li><strong>Obra nueva y rehabilitación:</strong> dirección de obra y coordinación de gremios.</li>
                                <li><strong>Instalaciones técnicas:</strong> electricidad, fontanería y redes.</li>
                                <li><strong>Mantenimiento y conservación:</strong> contratos y servicios puntuales para comunidades y empresas.</li>
                            </ul>

                            <h3>Certificaciones y garantías</h3>
                            <p>
                                Trabajamos con materiales certificados y ofrecemos garantías sobre la mano de obra. Si necesitas referencias o ver proyectos anteriores, consulta nuestra sección de proyectos o contáctanos para solicitar un dossier de obras realizadas.
                            </p>

                            <h3>Zona de trabajo</h3>
                            <p>
                                Prestamos servicio principalmente en Madrid y comunidades cercanas. Ofrecemos también visitas y presupuestos presenciales en función del proyecto.
                            </p>

                        </section>
                    </div>

                <Footer />
            </div>
    )
}

export default Info