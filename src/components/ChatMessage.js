import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    let msgSent = props.messageType === 'sent'? true:false;

    return <div className={ `chat-message ${msgSent?"rowReverse":""}`}>
    {
        <React.Fragment>
            {props.messageType ==='received'?  <img className='avatar' src={props.message.user.avatar} alt='avatar'/> :null}
            <div className = {props.messageType==='received'? 'content-received' : 'content-sent'}>
                {msgSent?null:<p className = 'userName'>{props.message.user.username}</p>}
                <p className = 'msg-body'>{props.message.body}</p>
            </div>
        </React.Fragment>
    }
    </div>
};

export default ChatMessage;