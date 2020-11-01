import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    console.log(props);
    return (<div className='chat-message'>
        <h5>{props.message.user.username}</h5>
        <img src={props.message.user.avatar}></img>
        
        <p>{props.message.body}</p>
    
    
    </div>);

};

export default ChatMessage;