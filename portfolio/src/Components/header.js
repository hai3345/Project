import React from "react";
import  "./header.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import  Home from "./page/home";
import Info from "./page/info";
import Project from "./page/project";

const Header = () => {
    return(
        <div>
            <div className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
            <Router>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Home />} path="/home"/>
                    <Route element={<Info />} path="/info"/>
                    <Route element={<Project />} path="/project"/>
                </Routes>        
            </Router>
            </div>

        </div>
    );
};

export default Header;