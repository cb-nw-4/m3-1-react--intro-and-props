import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    return <div className={`chat-message ${props.messageSent ? "sent" : "rcvd"}`}>
        <div className="user-name">{props.message.user.username}</div>
        <img className="user-avatar" src={props.message.user.avatar} alt="" />
        <img className="tip-rcvd" src="/assets/tip-received.svg" />
        <div className="user-message">{props.message.body}</div>
        <img className="tip-sent" src="/assets/tip-sent.svg" />
    </div>;
};

export default ChatMessage;