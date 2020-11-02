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
            <div className='chat-bubble'>            
                <p className='user-message user-message-sent'>{props.message.body}</p> 
                <img className='sent-bubble' src="/assets/tip-sent.svg" alt="bubble"/>  
            </div>
        </div> 
     );
};

const ReceivedMessage = (props) => {
    return <div className='chat-message'>
        <Avatar src={props.message.user.avatar} size={{width: "35px", height: "35px"}} alt="avatar" />
        <div>
            <p className='user-name'>{props.message.user.username}</p>
            <div className='chat-bubble'>   
                <p className='user-message'>{props.message.body}</p>
                <img className='received-bubble' src="/assets/tip-received.svg" alt="bubble"/>  
            </div>
        </div>
    </div>;
};

export default ChatMessage;