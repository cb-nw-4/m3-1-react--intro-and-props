import React from "react";

import "./ChatMessage.css";
import Avatar from "./Avatar";

const ReceivedMessage = (props) => {
  return (
    <div className="chat-message">
      <Avatar ava={props.message.user.avatar} />
      <div>
        <p className="username">{props.message.user.username}</p>
        <p className="body-messages">{props.message.body}</p>
      </div>
    </div>
  );
};

const SentMessage = (props) => {
  return (
    <div className="chat-message1">
      <p className="body-messages1">{props.message.body}</p>
    </div>
  );
};

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

export default ChatMessage;
