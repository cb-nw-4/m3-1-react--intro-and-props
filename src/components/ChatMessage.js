import React from "react";
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'

import "./ChatMessage.css";

const ChatMessage = ({message, messageType}) => {
  if (messageType === "sent") {
    return <SentMessage user={message.user} body={message.body} />;
  } else {
    return <ReceivedMessage user={message.user} body={message.body} />;
  }
}

export default ChatMessage;
