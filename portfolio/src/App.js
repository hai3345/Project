
import './App.css';
import {BrowserRouter, Link, Routes} from 'react-router-dom' 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import MainPage from './MainPage';
import ApiPage from "./Api/ApiPage"; 
import Header from "./header"
import { Nav } from 'react-bootstrap';




function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Nav />
        <switch>
          <Routes>
            <Route component={Home} path="/Components"/>
            <Route  component={project} path="/Components"/>
          </Routes>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
