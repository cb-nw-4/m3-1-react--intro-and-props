import React from 'react';
import './ChatMessage.css'

const ChatMessage = (props) => {

    const   {user, body} = props.message 
    return (
        <div className='chat-message'>  
           <div className='avatar'>
                <img src={user.avatar} alt='avatar'/> 
            </div>
            <div>
                <div className='nameUser'>
                    {user.username} 
                </div>
                <div className='bodyText'>
                    {body}
                </div>
                
            </div>
            
        </div>
    ) 

};

export default ChatMessage;