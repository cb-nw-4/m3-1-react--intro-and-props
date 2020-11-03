import React from 'react';

import './ChatMessage.css';

import Avatar from './Avatar';


const ChatMessage = (props) => {
    console.log(props);
    return (<div className={`chat-message ${props.message.type == 'sent' ? 'sent' : 'received'} `}>

        <div className='image-container'>
            {props.message.type === "received" && 
                <img src={props.message.user.avatar}></img>
            }
        </div>

        <div className='text-containter'> 
            {props.message.type === "received" &&
                <h5>{props.message.user.username}</h5>
            }

            <span className={props.message.type}>
                <p>{props.message.body}</p>
            </span>
                
        </div> 
    </div>);

};

export default ChatMessage;
