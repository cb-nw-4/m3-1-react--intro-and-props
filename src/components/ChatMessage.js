import React from 'react';
import './ChatMessage.css';

const ChatMessage = (props) => {    
    if (props.messageType === 'sent') {    
        return <SentMessage message={props.message} />;  
    } else {    
        return <ReceivedMessage message={props.message} />;  
    }

}

const SentMessage = (props) => {  
    return <div className='sent-message'>    
    <div></div>
    <div className='sent-text'>      
    {props.message.body}      
    <img src='/assets/tip-sent.svg' className='tip-sent' alt='' />    
    </div>  
    </div>
}

const ReceivedMessage = (props) => {  
    return <div className='rcvd-message'>
    <div className='username'>{props.message.user.username}</div>
    <div className='detail'>      
    <img src={props.message.user.avatar} className='avatar-img' alt='avatar' />      
    <div className='msg-body'>{props.message.body}</div>      
    <img src='/assets/tip-received.svg' className='tip-recieved' alt='' />
    </div>  
    </div>
}

export default ChatMessage;