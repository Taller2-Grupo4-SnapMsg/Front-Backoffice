import React from 'react';
import './passwordBox.scss';

const PasswordBox = ({default_text}) => {
    return (
        <div className = "passwordBox">
            <input type="password" placeholder={default_text} />
        </div>
    );
}

export default PasswordBox;