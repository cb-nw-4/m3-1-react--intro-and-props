import React from 'react';
import './ChatMessage.css'

const ChatMessage = (props) => {
    //console.log('chatMessage', props)

    if(props.messageType ==='sent'){
        return (
            <SentMessage message={props.message} />
        )
    }else {
        return(
            <ReceiveMessage message={props.message} />
        )
    }

}


const SentMessage =(props) =>{
    //console.log('props sent', props)
    
    const   {body} = props.message
             
    return (
        <div className='chat-message sent'>  
            <div>
                
                <div className='bodyText'>
                    {body}
                </div>
                
            </div>
            
        </div>
    ) 
}
    

const ReceiveMessage =(props) =>{
    
    const   {user, body} = props.message 
    return (
        <div className='chat-message received'>  
           <div className='avatar'>
                <img src={user.avatar} alt='avatar'/> 
            </div>
            <div>
                <div className='nameUser'>
                    {user.username} 
                </div>
                <div className='bodyText '>
                    {body}
                </div>
                
            </div>
            
        </div>
    ) 
}


export default ChatMessage;