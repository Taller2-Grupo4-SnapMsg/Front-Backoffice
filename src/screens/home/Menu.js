import { useState } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import "../../styles/home/container-1.scss";

const Menu = () => {
  return (
      <div className="container-1">
        
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
          <Link to="/notifications" className="text">
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Notifications</span>
          </div>
          </Link>
          <Link to="/notifications" className="text">
          <div className="item">
            <img src="/home.png" alt="Icono 1" className="icon"/>
            <span className="text">Messages</span>
          </div>
          </Link>
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
  );
};

export default Menu;