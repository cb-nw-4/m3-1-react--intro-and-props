import React from 'react';
import Avatar from './Avatar';
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
            <Avatar 
                participant ={user}/>  

            <div className='bodyText '>
                {body}
            </div>
                
        </div>
            
    
    ) 
}


export default ChatMessage;