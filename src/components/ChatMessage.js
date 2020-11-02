import React from "react";
import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props.messageType);

  if (props.messageType === "sent") {
    return (
      <div className="chat-message">
        <div>
          <img className="avatar-img" src={props.message.user.avatar} />
        </div>

        <div>
          <p className="username">{props.message.user.username}</p> 
          <div className="tip-sent">
          <p className="text-message current-user">{props.message.body}</p>
          <img  src="/assets/tip-sent.svg" /> 
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <div>
          <img className="avatar-img" src={props.message.user.avatar} />
        </div>

        <div>
          <p className="username">{props.message.user.username}</p>
          <div className="tip-received">
            <img src="/assets/tip-received.svg" />
            <p className="text-message other-user">{props.message.body}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ChatMessage;
