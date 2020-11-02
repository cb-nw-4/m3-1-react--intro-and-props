import React from "react";
import "./ChatMessage.css";

const ChatMessage = (props) => {
    //console.log(props, "Chat message props");
    if (props.messageType === "sent") {
        return <SentMessage message={props.message} />;
    } else {
        return <ReceivedMessage message={props.message} />;
    }
};

const ReceivedMessage = (props) => {
    //console.log(props, "ReceivedMessage props");
    return (
        <div className="chat-message received-chat-message">
            <img
            className="avatar"
            src={props.message.user.avatar}
            alt={props.message.user.avatar}
            />
            <div className="messageDiv">
                <span className="user-name">{props.message.user.username}</span>
                <div className="subMessageDiv subMessageDivReceived">
                    <img className="chatMessageHook hookReceived" src="/assets/tip-received.svg" alt='received message hook img'/>
                    <div className="message receivedMessage">{props.message.body}</div>
                </div>
            </div>
        </div>
    );
};

const SentMessage = (props) => {
    //console.log(props, "SentMessage props");
    return (
        <div className="chat-message sent-chat-message">
            <div className="messageDiv messageDivSent">
                <div className="message sentMessage">{props.message.body}</div>
                <img className="chatMessageHook hookSent" src="/assets/tip-sent.svg" alt='sent message hook img'/>
            </div>
        </div>
    );
};

export default ChatMessage;
