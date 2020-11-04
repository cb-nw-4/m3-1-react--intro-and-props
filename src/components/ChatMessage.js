import React from 'react';

import './ChatMessage.css';

import SentMessage from './SentMessage.js';

import ReceivedMessage from './ReceivedMessage.js';

const ChatMessage = (props) => {
    console.log("props", props);
    if (props.messageType === 'sent'){
        return <SentMessage message={props}/>
    } else {
        return <ReceivedMessage message={props}/>
    }
};

export default ChatMessage;