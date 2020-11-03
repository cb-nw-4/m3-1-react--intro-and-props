import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    return <div className='chat-message'>
    {
        <React.Fragment>
            <img className='avatar' src={props.message.user.avatar} alt='avatar'/>
            <div className = 'content'>
                <p className = 'userName'>{props.message.user.username}</p>
                <p className = 'msg-body'>{props.message.body}</p>
            </div>
        </React.Fragment>
    }
    </div>
};

export default ChatMessage;