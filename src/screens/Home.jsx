import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="singin">
      <p>home</p> 
      <Link to="/Singin">Go to Singin</Link> {/*Este es el link que te va a llevar a singin Lari*/}
      {/*Tenes que ponerlo en un boton(?) */}
    </div>
  );
};

export default Home;
