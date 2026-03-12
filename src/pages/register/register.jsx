import { useState } from "react";
import Nav_bar from "../../components/nav_bar/nav_bar";
import { registerUser } from "../../api/user_api";

const Register = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    user: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);
        console.log(formData);
      await registerUser(formData);

      setMessage("Usuario registrado correctamente");

      setFormData({
        nombre: "",
        apellidos: "",
        telefono: "",
        email: "",
        user: "",
        password: ""
      });

    } catch (error) {

      setMessage(
        error.response?.data?.error || "Error registrando usuario"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="register-page">

      <Nav_bar />

      <div className="register-wrapper">

        <div className="register-card">

          <h1 className="register-title">Crear cuenta</h1>

          <p className="register-subtitle">
            Regístrate para empezar a gestionar tus proyectos
          </p>

          <form className="register-form" onSubmit={handleSubmit}>

            <div className="form-grid">

              <input
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />

              <input
                name="apellidos"
                placeholder="Apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />

            </div>

            <input
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="user"
              placeholder="Usuario"
              value={formData.user}
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Crear cuenta"}
            </button>

          </form>

          {message && <p className="register-message">{message}</p>}

        </div>

      </div>

    </div>
  );
};

export default Register;