import React from "react";
import  "./Components/header.css";
import { Link} from 'react-router-dom'; 

const Header = () => {
    return(
        <div>
            <div className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">

                    <div className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                        <div className="navbar-brand">Portfolio</div>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/home">Home</Link></li>
                                <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/info">Info</Link></li>
                                <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/project">Project</Link></li>                
                            </ul>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Header;