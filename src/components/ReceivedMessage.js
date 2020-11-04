import React from 'react';

import './ChatMessage.css';

const ReceivedMessage = (props) => {
    const message = props.message || {};
    const user = message.user || {};
    // console.log("props", props);
    return (
        <div className='received-message'>
        <p>{user.username}</p>
        <li>{message.body}</li>
        <img src={user.avatar} alt='avatar'/>
        </div>
    );
}

export default ReceivedMessage;