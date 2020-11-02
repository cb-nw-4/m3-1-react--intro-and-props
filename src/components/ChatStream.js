import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage.js';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  //console.log(props,"ChatStream props");
  return (
    <section className='chat-stream'>
      {props.messages.map((message,index) => {
        //return <div>{message.body}</div>;
        let messageType; 
        if(message.user === props.currentUser) {
          messageType='sent';
        } else {
          messageType='received'
        }; 
        return (
          <ChatMessage 
            key={index} 
            user={message.user}
            message={message} 
            messageType={messageType} 
          />
        );
      })}
    </section>
  );
};

export default ChatStream;
