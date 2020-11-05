import React from 'react';

import './ChatMessage.css';

import SentMessage from './SentMessage';

import ReceivedMessage from './ReceivedMessage';

const ChatMessage = (props) => {
    if (props.messageType === 'sent') {
        return <SentMessage message={props.message} />;
    } else {
        return <ReceivedMessage message={props.message} />;
    }

};

export default ChatMessage;
