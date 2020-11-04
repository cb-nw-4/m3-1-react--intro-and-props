import React from 'react';
import './ChatMessage.css';


const ChatMessage = (props) => {
    return <div className='chat-message'>
        <img className="user-avatar" src={props.message.user.avatar}></img>
    <div> 
        <p className="user-name">{props.message.user.username}</p>
        <p className="user-message">{props.message.body}</p>
        </div>
    </div>;
};

export default ChatMessage;