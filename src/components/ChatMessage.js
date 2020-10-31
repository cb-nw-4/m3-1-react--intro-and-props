import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  return (
    <div className="chat-message">
      <img src={props.message.user.avatar} />
      <div className="name-message">
        <p className="user-name">{props.message.user.username}</p>
        <p className="para-message"> {props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
