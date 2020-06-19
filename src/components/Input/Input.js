import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <input
            type='search'
            placeholder='Search repository'
            onChange={(event) => props.inputChangeHandler(event)} />
    );
};

export default Input;
