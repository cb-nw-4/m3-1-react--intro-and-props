import React from 'react';

import './ChatStream.css';

import ChatMessage from './ChatMessage.js'

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
return <section className='chat-stream'>{
  props.messages.map((message) => {
    let messageSent = true;
    if (message.user === props.currentUser) {
      messageSent = true;
    } else {
      messageSent = false;
    }
    return <ChatMessage message={message} user={message.user} messageSent={messageSent}/>
  })
}</section>;
};

export default ChatStream;
