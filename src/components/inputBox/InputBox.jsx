import React from 'react';
import './inputBox.scss';

const InputBox = ({default_text}) => {
    return (
        <div className = "inputBox">
            <input type="text" placeholder={default_text} />
        </div>
    );
}

export default InputBox;