import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import small_logo from '/small_logo.png';
//import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="centered-container">
        <p className="centered-text">Texto centrado</p>
      </div>

      <label className="home-title">Hdhdhhd</label>

      <div className="lateral_menu">
        <img src={small_logo} className="logo-img" alt="SnapMessage logo" />
      </div>
    </div>
  );
};

export default Home;

/*const Home = () => {
  const [text, setText] = useState('')
  return (
    <div className="home">
      <label></label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};*/
