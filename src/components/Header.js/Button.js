import React from 'react';
import { FiNavigation } from 'react-icons/fi';

const Button = () => {
    return (
        <div style={{marginTop: "1rem"}}>
        <button className="btn btn-success"><FiNavigation/> CONTACT ME!</button>
        </div>
    );
}

export default Button;
