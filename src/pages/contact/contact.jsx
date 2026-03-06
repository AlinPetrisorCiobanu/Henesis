import { useState, useEffect, useRef } from "react"
import Footer from "../../components/footer/footer"
import Nav_bar from "../../components/nav_bar/nav_bar"

const Contact = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: ""
    })

    const [success, setSuccess] = useState(false)

    // Refs para animaciones
    const infoRef = useRef(null)
    const formRef = useRef(null)

    // Animaciones visibles
    const [infoVisible, setInfoVisible] = useState(false)
    const [fieldsVisible, setFieldsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const infoTop = infoRef.current?.getBoundingClientRect().top || 0
            const formTop = formRef.current?.getBoundingClientRect().top || 0
            const screenHeight = window.innerHeight

            if(infoTop < screenHeight - 100) setInfoVisible(true)
            if(formTop < screenHeight - 100) setFieldsVisible(true)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // check on load
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        setSuccess(true)
        setFormData({nombre:"", email:"", telefono:"", mensaje:""})
    }

    // WhatsApp mensaje predeterminado
    const mensajeWhatsApp = encodeURIComponent(
        `¡Hola! Quiero información sobre reformas y proyectos.
        Mi nombre es ${formData.nombre || "[nombre]"}
        Email : ${formData.email || "[email]"}
        Telefono : ${formData.telefono || "[telefono]"}
        Quiero : ${formData.mensaje || "[mensaje]"}
        `)
    const telefono = "34624250761"
    const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeWhatsApp}`

    return (
        <div className="Container">
            <Nav_bar />

            {/* HERO */}
            <section className="contact_hero">
                <h1 className={`fade_up ${infoVisible ? "visible" : ""}`}>Contacto</h1>
                <p className={`fade_up ${infoVisible ? "visible" : ""}`}>
                    Déjanos tu mensaje y te responderemos lo antes posible.
                </p>
            </section>

            {/* FORMULARIO + INFO */}
            <section className="contact_form_section">

                {/* Información de contacto */}
                <div ref={infoRef} className={`contact_info fade_left ${infoVisible ? "visible" : ""}`}>
                    <h3>Información de contacto</h3>
                    <p>📍 Madrid, España</p>
                    <p>📞 +34 624250761</p>
                    <p>✉️ info@henesis.com</p>
                </div>

                {/* Formulario */}
                <form ref={formRef} className="contact_form">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`fade_field ${fieldsVisible ? "visible" : ""}`}
                        style={{transitionDelay:"0.1s"}}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className={`fade_field ${fieldsVisible ? "visible" : ""}`}
                        style={{transitionDelay:"0.2s"}}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`fade_field ${fieldsVisible ? "visible" : ""}`}
                        style={{transitionDelay:"0.3s"}}
                        required
                    />
                    <textarea
                        name="mensaje"
                        placeholder="Tu mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className={`fade_field ${fieldsVisible ? "visible" : ""}`}
                        style={{transitionDelay:"0.4s"}}
                        required
                    />

                    <div className="contact_buttons">
                        <button type="submit" className="btn_submit">Enviar mensaje</button>
                        <a href={urlWhatsApp} target="_blank" rel="noreferrer" className="btn_whatsapp">
                            Enviar por WhatsApp
                        </a>
                    </div>

                    {success && <p className="success_msg">¡Mensaje enviado correctamente!</p>}
                </form>

            </section>

            <Footer />
        </div>
    )
}

export default Contact