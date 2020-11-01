import React from "react";
import "./ChatMessage.css";

const ReceivedMessage = (props) => {
  return <div className='received-message'>
    <img src={props.user.avatar} />
      <div className="name-message">
        <p className="user-name">{props.user.username}</p>
        <p className="para-message"> {props.body}</p>
        <img className="received-tip" src="./assets/tip-received.svg" />
      </div>
  </div>
}


export default ReceivedMessage