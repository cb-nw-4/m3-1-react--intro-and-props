import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <img className="avatar" src={props.message.user.avatar} alt={props.message.user.username} />
      <img className="tip-received" src="/assets/tip-received.svg"alt="tip"/>
      <div className="name-message">
        <p className="username">{props.message.user.username}</p>
        <p className="text"> {props.message.body}</p>
      </div>
    </div>
  );
};

const SentMessage = (props) => {
  return (
    <div className="sent-message">
      <div className="name-message">
        <p className="sent-text"> {props.message.body}</p>
      </div>
      <img className="tip-sent" src="/assets/tip-sent.svg"alt="tip"/>
    </div>
  );
};

export default ChatMessage;