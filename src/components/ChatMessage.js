import React from 'react';
import './ChatMessage.css'

const SentMessage = (props) => {
    return <div className='chat-message'>
<div className='nameAndMessageSection'>
   <div className='sent-bodyMessage'>{props.message.body}</div>
   <div className='messageType'>{props.messageType}</div> 
 
   </div>

    </div>
}
const ReceivedMessage = (props) => {
    return <div className='chat-message'>
    <img className='avatarPhoto' src={props.message.user.avatar}></img> 
<div className='nameAndMessageSection'>
    <div className='username'>{props.message.user.username}</div> 
   <div className='bodyMessage'>{props.message.body}</div>
   <div className='messageType'>{props.messageType}</div> 
 
   </div>

    </div>
}


const ChatMessage = (props) => {
    if (props.messageType === 'sent') {
      return <SentMessage message={props.message} />;
    } else {
      return <ReceivedMessage message={props.message} />;
    }
  };
export default ChatMessage;