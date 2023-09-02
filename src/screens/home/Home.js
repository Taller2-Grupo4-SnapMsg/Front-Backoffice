import { useState } from "react";
import "../../styles/home.scss";
import "../../styles/lateral_menu.scss";

const Home = () => {
  return (
    <div className="home">
        <div className="home-title-container">
          <div className="text-container">
            <label className="home-title">Home</label>
          </div>
        </div>
      <div className="container_1">
        
        <div className="logo-container">
          <img src='/small_logo.png' className="logo-app" alt="SnapMessage logo" />
          <span className="text-app">SnapMessage</span>
        </div>

        <div className="menu">
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Home</span>
          </div>
          <div className="item">
          <img src="/home.png" alt="Icono 2" className="icon"/>
            <span className="text">Explore</span>
          </div>
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Notifications</span>
          </div>
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Messages</span>
          </div>
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Profile</span>
          </div>
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Settings</span>
          </div>
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">More</span>
          </div>
          
          </div>
        </div>

    </div>
  );
};

export default Home;