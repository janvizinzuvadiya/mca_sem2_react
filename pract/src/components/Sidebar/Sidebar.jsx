import React  from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
                <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
                <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                    </ul>
                </li>
                <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;