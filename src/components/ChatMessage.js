import React from 'react';
import './ChatMessage.css';
import Avatar from './Avatar';

const ChatMessage = (props) => {
    console.log(props);    
    if (props.messageType === 'sent') {
        return <SentMessage message={props.message} />;
    } else {
        return <ReceivedMessage message={props.message} />;
    }    
};


const SentMessage = (props) => {
    return (
        <div className='chat-message'>  
            <p className='user-message user-message-sent'>{props.message.body}</p>       
        </div>
     );
};

const ReceivedMessage = (props) => {
    return <div className='chat-message'>
        <Avatar src={props.message.user.avatar} size={{width: "35px", height: "35px"}} alt="avatar" />
        <div>
            <p className='user-name'>{props.message.user.username}</p>
            <p className='user-message'>{props.message.body}</p>
        </div>
    </div>;
};

export default ChatMessage;