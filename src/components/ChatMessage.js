import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({
    message: {
        body,
        user,
        messageType
    } = {}
}) => {
    //const {body,user} = props.message;
    // console.log(`ChatMessage message`,body);
    // console.log(`ChatMessage User`,user);
    // console.log(`messageType`,messageType);
    if (!body || !user) {
        return <></>;
    }
    if (messageType === 'received') {
    return (
        <div className='chat-message'> 
            <p className = "user">{user.username}</p>
            <div className='chat-message-received'>
                <img src={user.avatar} className= "avatar" alt='avatar'/>
                <img src="/assets/tip-received.svg" className= "tip-received" alt='tip-received'/>
                <p className = "message-received">{body}</p>
            </div>
        </div>
    )}
    else {
        return (
            <div className='chat-message-sent'> 
                    <p className = "message-sent">{body}</p>
                    <img src="/assets/tip-sent.svg" className= "tip-sent" alt='tip-sent'/>
            </div>
        )}
};

export default ChatMessage;