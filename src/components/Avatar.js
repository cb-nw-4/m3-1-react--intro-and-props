import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
    return (
    <img 
        className='participant-image'
        src={props.imageUrl} 
        height={props.size} 
        alt="participant's avatar"
    />
    );
}

export default Avatar;