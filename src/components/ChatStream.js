import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';

const ChatStream = (props) => {
  return (
    <section className='chat-stream'>{props.messages.map((item) => {
      if (item.user.username === props.personWriting.username) {
        return (
          <ChatMessage 
            message={item} 
            let messageType = 'sent'
          />
        );
      }
      else {
        return (
          <ChatMessage 
            message={item}
            let messageType = 'received'
          />
        );
      }
    })}
    </section>
  );
}


export default ChatStream;