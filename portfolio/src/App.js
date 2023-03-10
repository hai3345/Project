
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.css'
import MainPage from './MainPage';

import { Nav } from 'react-bootstrap';
import  Home from "./page/home"
import Info from "./page/info"
import Project from "./page/project"
import Header from "./Components/header"


function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Home />} path="/home"/>
            <Route element={<Info />} path="/info"/>
            <Route element={<Project />} path="/project"/>
          </Routes>        
      </Router>
    </div>
  );
}

export default App;
