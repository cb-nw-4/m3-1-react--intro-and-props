import React from 'react';
import './ChatMessage.css';

const ReceivedMessage= (props)=>{
    //console.log(props);
    return(
        <div className="main">
            <span className="userName">{props.userName}</span>
            <div>
                <span><img src={props.avatar} className="userPic"/></span>
                <span className='chat-message'>{props.message}</span>
            </div>
        </div>
    );
};



export default ReceivedMessage;