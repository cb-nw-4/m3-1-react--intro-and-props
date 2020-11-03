import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
    return <img className='user-avatar' src={props.src} width={props.size.width} height={props.size.height} />;
}

export default Avatar;
