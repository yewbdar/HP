import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props)=> {

    return (
        <button variant="contained" color="primary" {...props}>
            {props.btnName}
        </button>
    );
}
export default Button;