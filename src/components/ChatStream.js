import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';


// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  console.log(`ChatStream props`,props);
  return <section className='chat-stream'>{
    props.messages.map((message,i) => {
      if (props.currentUser.username === message.user.username) message.messageType = 'sent';
      else message.messageType = 'received';
      return <ChatMessage key={i} message={message}/> 
    })
    
    }</section>;
};

export default ChatStream;
