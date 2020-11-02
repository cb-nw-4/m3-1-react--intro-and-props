import React from 'react';
import './ChatMessage.css';

const ChatMessage = (props) => {
  return <div className='chat-message'>
    {props.message.body}
  </div>
}

export default ChatMessage;
