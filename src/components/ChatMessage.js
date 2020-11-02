import React from 'react';
import './ChatMessage.css';

const ChatMessage = (props) => {
  return <div className='chat-message'>
    <div className='username'>{props.message.user.username}</div>
    <div className='detail'><img src={props.message.user.avatar} className='avatar-img' />
      <div className='msg-body'>{props.message.body}</div>
    </div>
  </div>
}

export default ChatMessage;
