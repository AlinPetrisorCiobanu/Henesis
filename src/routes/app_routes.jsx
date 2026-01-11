import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";



const App_routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App_routes;