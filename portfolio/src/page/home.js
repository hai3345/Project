import React from "react";
import { Link } from 'react-router-dom'


const Home = () => {
    return (
      <div>
        <h1>홈</h1>
        <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠eeee.</p>
        <Link to="/">Home</Link>
        <Link to="/home">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/project">Project</Link>
      </div>
    );
  };
  
  export default Home;