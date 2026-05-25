import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav_bar from "../../components/nav_bar/nav_bar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://henesisbackend-production.up.railway.app/users/login",
        form
      );

      // Aquí guardas token si el backend devuelve JWT
      localStorage.setItem("token", res.data.token);
      navigate("/"); // redirige a home o dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Error en login");
    }
  };

  return (
    <div className="Container">
      <Nav_bar />
      <div className="login_wrapper">
        <h1 className="login_title">Login</h1>

        <form className="login_form" onSubmit={handleSubmit}>
          {error && <p className="error_msg">{error}</p>}

          <input
            type="text"
            name="user"
            placeholder="Usuario"
            value={form.user}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Acceder</button>
        </form>
      </div>
    </div>
  );
};

export default Login;