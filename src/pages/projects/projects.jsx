import { useState, useEffect } from "react"
import Footer from "../../components/footer/footer"
import Nav_bar from "../../components/nav_bar/nav_bar"
import cocina from "../../assets/img/cocina.png"
import banio from "../../assets/img/banio.png"
import reforma from "../../assets/img/reforma.png"
import oficina from "../../assets/img/oficina.png"

const proyectosData = [
    {
        id: 1,
        titulo: "Reforma de cocina moderna",
        img: cocina,
        descripcion: "Reforma completa con materiales de alta calidad."
    },
    {
        id: 2,
        titulo: "Baño minimalista",
        img: banio,
        descripcion: "Diseño moderno, con iluminación LED y accesorios premium."
    },
    {
        id: 3,
        titulo: "Reforma integral de vivienda",
        img: reforma,
        descripcion: "Transformación completa de espacio, desde suelo a techo."
    },
    {
        id: 4,
        titulo: "Oficina corporativa",
        img: oficina,
        descripcion: "Rehabilitación y diseño funcional para oficinas modernas."
    }
]

const Proyectos = () => {
    const [visibleProjects, setVisibleProjects] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const newVisible = proyectosData.filter((_, i) => {
                const el = document.getElementById(`proyecto-${i}`)
                if(!el) return false
                const rect = el.getBoundingClientRect()
                return rect.top < window.innerHeight - 50
            })
            setVisibleProjects(newVisible.map(p => p.id))
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const openModal = (index) => {
        setCurrentProject(index)
        setModalOpen(true)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setModalOpen(false)
        document.body.style.overflow = "auto"
    }

    const nextProject = () => setCurrentProject((currentProject + 1) % proyectosData.length)
    const prevProject = () => setCurrentProject((currentProject - 1 + proyectosData.length) % proyectosData.length)

    return (
        <div className="Container">
            <Nav_bar />
            <section className="proyectos_hero">
                <h1>Proyectos</h1>
                <p>Transformamos espacios con calidad y estilo.</p>
            </section>

            <section className="proyectos_grid">
                {proyectosData.map((proyecto, i) => (
                    <div
                        key={proyecto.id}
                        id={`proyecto-${i}`}
                        className={`proyecto_card ${visibleProjects.includes(proyecto.id) ? "visible" : ""}`}
                        onClick={() => openModal(i)}
                    >
                        <img src={proyecto.img} alt={proyecto.titulo} />
                        <div className="overlay">
                            <h3>{proyecto.titulo}</h3>
                        </div>
                    </div>
                ))}
            </section>

            {/* MODAL LIGHTBOX */}
            {modalOpen && (
                <div className="modal_lightbox">
                    <div className="modal_content">
                        <button className="close_modal" onClick={closeModal}>×</button>
                        <img src={proyectosData[currentProject].img} alt={proyectosData[currentProject].titulo} />
                        <h2>{proyectosData[currentProject].titulo}</h2>
                        <p>{proyectosData[currentProject].descripcion}</p>
                        <div className="modal_nav">
                            <button onClick={prevProject}>‹</button>
                            <button onClick={nextProject}>›</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Proyectos