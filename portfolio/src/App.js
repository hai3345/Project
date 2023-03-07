
import './App.css';
import MainPage from './MainPage';
import ApiPage from "./Api/ApiPage"; 
import Header from "./header"
import {BrowserRouter, Link, Routes} from 'react-router-dom' 
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Api/ApiPage" element={<ApiPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
