import React from 'react';

import './ChatMessage.css';

const SentMessage = (props) => {
    const message = props.message || {};
    return (
        <div className='sent-message'>
        <li>{message.body}</li>
        </div>
    )
}

export default SentMessage;