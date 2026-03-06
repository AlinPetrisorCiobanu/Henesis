import { useState, useEffect } from "react"
import { FaInstagram, FaFacebookF, FaTiktok, FaArrowUp, FaWhatsapp } from "react-icons/fa"

const Footer = () => {

    const [showCookies, setShowCookies] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(()=>{
        const accepted = localStorage.getItem("cookiesAccepted")
        if(!accepted) setShowCookies(true)

        const handleScroll = () => {
            if(window.scrollY > 300){
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const acceptCookies = () => {
        localStorage.setItem("cookiesAccepted","true")
        setShowCookies(false)
    }

    const scrollTop = () => window.scrollTo({top:0, behavior:"smooth"})

    return (
        <>
            <footer id="footer">

                <div className="footer_container">

                    {/* Empresa */}
                    <div className="footer_column">
                        <h3>Henesis</h3>
                        <p>
                            Especialistas en reformas, construcción y soluciones
                            integrales para hogares y empresas.
                        </p>

                        <div className="footer_socials">
                            <FaInstagram/>
                            <FaFacebookF/>
                            <FaTiktok/>
                        </div>
                    </div>

                    {/* Servicios */}
                    <div className="footer_column">
                        <h4>Servicios</h4>
                        <ul>
                            <li>Reformas integrales</li>
                            <li>Obra nueva</li>
                            <li>Rehabilitación</li>
                            <li>Mantenimiento</li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div className="footer_column">
                        <h4>Empresa</h4>
                        <ul>
                            <li>Sobre nosotros</li>
                            <li>Proyectos</li>
                            <li>Contacto</li>
                            <li>Trabaja con nosotros</li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="footer_column">
                        <h4>Contacto</h4>
                        <ul>
                            <li>📍 Madrid, España</li>
                            <li>📞 +34 600 000 000</li>
                            <li>✉️ info@henesis.com</li>
                        </ul>
                    </div>

                </div>

                <div className="footer_bottom">
                    <p>© {new Date().getFullYear()} Henesis. Todos los derechos reservados.</p>
                    <div className="legal_links">
                        <span>Política de privacidad</span>
                        <span>Política de cookies</span>
                        <span>Aviso legal</span>
                    </div>
                </div>

            </footer>

            {/* Cookies */}
            {showCookies && (
                <div className="cookie_banner">
                    <p>
                        Utilizamos cookies para mejorar la experiencia de usuario.
                        Al continuar navegando aceptas nuestra política de cookies.
                    </p>
                    <button onClick={acceptCookies}>Aceptar cookies</button>
                </div>
            )}

            {/* Scroll top */}
            {showScrollTop && (
                <div className="scroll_top" onClick={scrollTop}>
                    <FaArrowUp/>
                </div>
            )}

            {/* WhatsApp flotante */}
            <a
                href="https://wa.me/34624250761?text=¡Hola! Quiero información sobre reformas y proyectos."
                target="_blank"
                rel="noreferrer"
                className="whatsapp_floating"
            >
                <FaWhatsapp/>
            </a>

        </>
    )
}

export default Footer