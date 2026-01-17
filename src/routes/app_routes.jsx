import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Blog from "../pages/blog/blog";
import Reforms from "../pages/reforms/reforms";
import Projects from "../pages/projects/projects";



const App_routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/reformas" element={<Reforms />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App_routes;