import React from "react";
import "./ChatMessage.css";

const ReceivedMessage = (props) => {
  console.log(props,'hey')
  return <div className='received-message'>
    <img src={props.user.avatar} />
      <div className="name-message">
        <p className="user-name">{props.user.username}</p>
        <p className="para-message"> {props.body}</p>
      </div>
  </div>
}


export default ReceivedMessage