import React from 'react';
import BackButton from '../../components/backButton/BackButton';
import Logo from '../../components/logo/Logo';
import '../../styles/login/login.scss';

const LogIn = (_) => {
    return (
        <div className="login">
            <div style = {{ display: 'inline-flex', alignItems: 'center' }}>
                <Logo/>
                <div style = {{display: 'flex', flexDirection: 'column', paddingLeft: '20px'}}>
                    <BackButton/>
                    <BackButton/>
                    <BackButton/>
                    <BackButton/>
                    <BackButton/>
                    <BackButton/>
                </div>
            </div>
        </div>
    );
}

export default LogIn;