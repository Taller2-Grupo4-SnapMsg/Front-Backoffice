import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pingHandler from '../../service/Ping'
import '../../styles/singin/singin.scss';
import Logo from '../../components/logo/Logo';
import InputBox from '../../components/inputBox/InputBox';
import PasswordBox from '../../components/password/Password';
import BackButton from '../../components/backButton/BackButton';

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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Logo/>
            <div className="background" style={{ paddingLeft: '20px' }}>
                <h1 className="title"> Welcome back! </h1>
                <InputBox default_text="Email" />
                <PasswordBox default_text="Password" />
                <button className="sign-in-button" onClick={handlePingRequest}>Sign in</button>
                <BackButton />
            </div>
        </div>
    </div>
  );
};

export default Singin;
