import React from "react";
import  "./header.css";

const MenuItem = (children) =>{
    <div className="menu-item">{children}</div>
}

const Header = () => {
    return(
        <div>
            <div className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-topnavbar navbar-expand-lg bg-secondary text-uppercase fixed-top">Baner</div>

        </div>
    );
};

export default Header;