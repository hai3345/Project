
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import  Home from "./page/home"
import Info from "./page/info"
import Project from "./page/project"
import Header from "./header"



function App() {

 
  
  return (
    <div>
      <Router>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="/home"/>
            <Route element={<Info />} path="/info"/>
            <Route element={<Project />} path="/project"/>
        </Routes>  
        <Header />
        <Project />
        <Info />
      </Router>
    </div>
  );
}

export default App;
