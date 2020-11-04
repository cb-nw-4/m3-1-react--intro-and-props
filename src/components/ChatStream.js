import React from 'react';

import './ChatStream.css';

import ChatMessage from './ChatMessage.js';

function ChatStream(props) {
  return (
      <section className='chat-stream'>
        {props.messages.map((message, i) => {
        let messageType = props.currentUser === message.user ? 'sent':'received';
          return (
          <ChatMessage
            key={i}
            user={message.user}
            body={message.body}
            messageType={messageType}
          />
          );
        }
      )}
      </section>
    );
}

export default ChatStream;
