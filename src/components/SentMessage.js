import React from "react";
import "./ChatMessage.css";

const SentMessage = (props) => {
  return (
    <div className="my-message">
      <img src={props.user.avatar} />
      <div className="name-message">
        <p className="user-name">{props.user.username}</p>
        <p className="para-message">
          {" "}
          {props.body}
        </p>
          <img className="sent-tip" src="./assets/tip-sent.svg" />
      </div>
    </div>
  );
};

export default SentMessage;
