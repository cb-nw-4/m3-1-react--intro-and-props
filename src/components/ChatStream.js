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
  //console.log(props);
  return <section className='chat-stream'>{props.messages.map((element)=>{
    let messageType;
    if(props.currentUser===element.user){
      messageType='sent';
    }
    else{
      messageType='recieved';
    }
    return (<ChatMessage 
      user={element.user}
      message={element.body}
      messageType={messageType}
      />);
  })}
  </section>;
};

export default ChatStream;