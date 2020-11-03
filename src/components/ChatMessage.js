import React from 'react';
import SentMessage from'./SentMessage.js'
import ReceivedMessage from './ReceivedMessage.js'

const ChatMessage = (props) => {
    //console.log(props);
    if (props.messageType === 'sent') {
        //console.log(props.message);
        return (<SentMessage 
            message={props.message} 
            userName={props.user.username}
            avatar={props.user.avatar}
            />);
    } else {
        //console.log(props.message);
        return (<ReceivedMessage 
            message={props.message} 
            userName={props.user.username}
            avatar={props.user.avatar}
            />);
    }
};

export default ChatMessage;