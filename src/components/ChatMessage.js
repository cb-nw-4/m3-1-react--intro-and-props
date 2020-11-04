import React from 'react';
import './ChatMessage.css';


const ChatMessage = (props) => {

    if (props.messageType === 'sent') {
        return <SentMessage message={props.message} />;
    } 
    else {
        return <ReceivedMessage message={props.message} />;
    }
    };


    const SentMessage = (props) => {
        return ( 
            <div className='chat-message'>
                    <p className="user-message message-sent">{props.message.body}</p>
            </div>
                );
    }


    const ReceivedMessage = (props) => {
        return ( 
            <div className='chat-message'>
                <img className="user-avatar" src={props.message.user.avatar} alt=""></img>
                <div> 
                    <p className="user-name">{props.message.user.username}</p>
                    <p className="user-message">{props.message.body}</p>
                </div>
            </div>
                );
    }
export default ChatMessage;