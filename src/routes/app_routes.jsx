import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Blog from "../pages/blog/blog";
import Projects from "../pages/projects/projects";
import Info from "../pages/info/info";
import Obra from "../pages/Obra/obra";
import Reforma from "../pages/Reforma/reforma";
import Fibra from "../pages/Fibra/fibra";



const App_routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/info" element={<Info />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/obra" element={<Obra />} />
                <Route path="/reforma" element={<Reforma />} />
                <Route path="/fibra" element={<Fibra />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App_routes;