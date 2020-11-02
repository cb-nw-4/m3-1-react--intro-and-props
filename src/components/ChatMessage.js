import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
console.log(props);
    return (
        <div className="main">
            <span className="userName">{props.message.user.username}</span>
            <div>
                <span>
                    <img src={props.message.user.avatar}className="userPic"/>
                </span>
                <span className='chat-message'>{props.message.body}</span>
            </div>
        </div> 
    );
};

export default ChatMessage;