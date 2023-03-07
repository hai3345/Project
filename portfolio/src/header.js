import React from "react";
import  "./header.css";

const MenuItem = (children) =>{
    <div className="menu-item">{children}</div>
}

const Header = () => {
    return(
        <div>
            <div className="logo">Baner</div>
            <div className="menu">
                <MenuItem>Home</MenuItem>
                <MenuItem>소개</MenuItem>
                <MenuItem>프로젝트</MenuItem>
            </div>
        </div>
    );
};

export default Header;