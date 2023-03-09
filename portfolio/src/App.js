
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.css'
import MainPage from './MainPage';
import Header from "./Components/header"
import { Nav } from 'react-bootstrap';
import  Home from "./page/home"
import Info from "./page/info"
import Project from "./page/project"



function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
            <Route element={<Home />} path="/home"/>
            <Route element={<Info />} path="/info"/>
            <Route element={<Project />} path="/project"/>
          </Routes>        
      </Router>
    </div>
  );
}

export default App;
