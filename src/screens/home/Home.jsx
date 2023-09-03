import React from 'react';
import Feed from './Feed';
import Menu from './Menu';
import "../../styles/home/home.scss";
import "../../styles/home/container-1.scss";
import "../../styles/home/container-2.scss";
import "../../styles/home/container-3.scss";

const Home = () => {
  return (
    <div className="home">
      < Menu/>
      < Feed/>
      <div className="container-3">
      </div>
    </div>
  );
};

export default Home;