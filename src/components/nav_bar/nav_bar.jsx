import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import logo from "../../assets/img/logo_henesis.png";

const Nav_bar = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const goTo = (path) => {
        navigate(`/${path}`);
        setMenuOpen(false);
    };

    return (

       <nav className="navbar">

            <div className="nav_container">

                <div className="logo" onClick={() => goTo("")}>
                    <img src={logo} alt="logo empresa"/>
                </div>

                <div className="menu">

                    <span onClick={() => goTo("")}>Inicio</span>
                    <span onClick={() => goTo("proyectos")}>Proyectos</span>
                    <span onClick={() => goTo("info")}>Quién Somos</span>
                    <span onClick={() => goTo("blog")}>Blog</span>
                    <span className="contact_btn" onClick={() => goTo("contacto")}>
                        Contacto
                    </span>

                    <div className="social">
                        <FaInstagram/>
                        <FaFacebookF/>
                        <FaTiktok/>
                    </div>

                </div>

                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className={`mobile_menu ${menuOpen ? "open" : ""}`}>

                <span onClick={() => goTo("")}>Inicio</span>
                <span onClick={() => goTo("proyectos")}>Proyectos</span>
                <span onClick={() => goTo("info")}>Quién Somos</span>
                <span onClick={() => goTo("blog")}>Blog</span>
                <span className="contact_btn" onClick={() => goTo("contacto")}>
                    Contacto
                </span>

                <div className="mobile_social">
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaTiktok/>
                </div>

            </div>

        </nav>
    );
};

export default Nav_bar;