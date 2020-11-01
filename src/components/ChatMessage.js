import React from 'react';

import './ChatMessage.css';
import Avatar from './Avatar.js';

const ChatMessage = (props) => {
    return (
        <div className='chat-message'>
            {props.messageType === 'sent' ? <SentMessage message={props.message} /> : <ReceivedMessage message={props.message} />}
        </div>
    );
};

const SentMessage = (props) => {
    return (
    <div className='sent-container'>
        <p className='message-sent'>{props.message.body}</p>
    </div>
    );
}
    
const ReceivedMessage = (props) => {
    return (
    <div>
        <h2 className='username'>{props.message.user.username}</h2>
        <Avatar
            imageUrl={props.message.user.avatar}
            size={50}
            /> 
        <p className='message-received'>{props.message.body}</p>
    </div>
    );
}


export default ChatMessage;
