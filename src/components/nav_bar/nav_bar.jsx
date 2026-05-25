import React, { useState } from "react";
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

  const menuLinks = [
    { label: "Inicio", path: "" },
    { label: "Proyectos", path: "proyectos" },
    { label: "Quién Somos", path: "info" },
    { label: "Blog", path: "blog" },
    { label: "Contacto", path: "contacto" },
    { label: "Iniciar Session", path: "login" },
    { label: "Registrate", path: "register" },
  ];

    return (
    <nav className="navbar" aria-label="Barra de navegación principal">
      <div className="nav_container">
        <div className="logo" role="button" tabIndex={0} onClick={() => goTo("")} aria-label="Ir al inicio">
          <img src={logo} alt="Henesis - reformas y construcción" loading="lazy" />
        </div>

        <div className="menu">
          {menuLinks.map((link) => (
            <span key={link.path} onClick={() => goTo(link.path)}>
              {link.label}
            </span>
          ))}

          <div className="social">
            <FaInstagram />
            <FaFacebookF />
            <FaTiktok />
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
        {menuLinks.map((link) => 
            link.label !== "Iniciar Session" && link.label !== "Registrate" ? (
                <span key={link.path} onClick={() => goTo(link.path)}>
                    {link.label}
                </span>
            ) : null
        )}

        <span className="contact_btn" onClick={() => goTo("contacto")}>
          Contacto
        </span>
        <span className="login_btn" onClick={() => goTo("login")}>
          Iniciar Sesión
        </span>
        <span className="register_btn" onClick={() => goTo("register")}>
          Registrarse
        </span>

        <div className="mobile_social">
          <FaInstagram />
          <FaFacebookF />
          <FaTiktok />
        </div>
      </div>
    </nav>
  );
};

export default Nav_bar;