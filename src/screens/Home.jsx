import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="singin">
      <p>home</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
