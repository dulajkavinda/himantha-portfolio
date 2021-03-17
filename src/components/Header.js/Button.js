import React from 'react';
import { FiNavigation } from 'react-icons/fi';

const Button = () => {
    return (
        <div style={{marginTop: "1rem"}}>
        <a href="mailto:himantha@himantha.gay" style={{textDecoration: 'none', background: "#e040fb", borderColor: '#e040fb'}} className="btn btn-secondary"><FiNavigation/> CONTACT ME!</a>
        </div>
    );
}

export default Button;
