import "../../style/nav_bar.css"

const Nav_bar = () => {

    const active_menu = () => {
    hamburguesa.classList.toggle('active');
    menu.classList.toggle('active_menu');
};

    return (

        <div id="nav_bar">
            <div className="nav_info">
                <div className="logo">Logo</div>
                <div id="hamburguesa" className="menu_hamburguesa" onClick={active_menu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>Home</div>
            </div>
            <div id="menu" className="menu_nav">
                <div>option_1</div>
                <div>option_2</div>
                <div>option_3</div>
                <div>option_4</div>
                <div>option_5</div>
            </div>
        </div>

    )
}

export default Nav_bar;