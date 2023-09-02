import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pingHandler from '../service/Ping';
import '../styles/singin.scss';

const Singin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlePingRequest = async () => {
        try {
            const res = await pingHandler();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="top-centre">
      <div className="background">
          <div>
              <h1 className="title"> Welcome back! </h1>
          </div>
          <div className="center">
              <button className="google-sign-in-button">Continue with Google</button>
          </div>
          <input className="center" type="email" placeholder="Email or Username" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input className="center" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button className="sign-in-button" onClick={handlePingRequest}>Sign in</button>
          <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Singin;
