import React from 'react';

const SentMessage = (props) => {
    return (
        <div className='chat-message-sent'>       
            <p className='chat-message-sent-body'>{props.message.body}</p>
        </div>
    )};

export default SentMessage;