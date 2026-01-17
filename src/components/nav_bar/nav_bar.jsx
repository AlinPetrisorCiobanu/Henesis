import { useNavigate } from "react-router-dom";
import "../../style/nav_bar.css"

const Nav_bar = () => {
    const navigate = useNavigate();

    const active_menu = () => {
    hamburguesa.classList.toggle('active');
    menu.classList.toggle('active_menu')
    };

    const go_to = (path) => {
        navigate(`/${path}`)
    }

    return (

        <div id="nav_bar">
            <div className="nav_info">
                <div className="logo">Logo</div>
                <div id="hamburguesa" className="menu_hamburguesa" onClick={active_menu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="menu" className="menu_nav">
                <div onClick={()=>go_to("")}>Inicio</div>
                <div onClick={()=>go_to('proyectos')}>Proyectos</div>
                <div onClick={()=>go_to('reformas')}>Reformas</div>
                <div onClick={()=>go_to('blog')}>Blog</div>
                <div onClick={()=>go_to('contacto')}>Contacto</div>
            </div>
        </div>

    )
}

export default Nav_bar;