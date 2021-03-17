import React from 'react';

const Image = () => {
    return (
        <div>
        <img src={process.env.PUBLIC_URL +'./himantha.jpeg'} class="rounded-circle" alt="himantha" width="160rem" height="160rem"/>
        </div>
    );
}

export default Image;
