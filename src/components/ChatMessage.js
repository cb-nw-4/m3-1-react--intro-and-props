import React from 'react';
import './ChatMessage.css';
import SentMessage from './SentMessage.js';
import ReceivedMessage from './ReceivedMessage.js';


const ChatMessage = ({avatar, user, msg, msgType}) => {
    if(msgType === 'sent'){
        return <SentMessage myMsg={msg}/>;
    } else {
        return <ReceivedMessage theirMsg={msg} theirAvatar={avatar} theirUser={user}/>
    }

    // return <div className='chat-message'>
    //     <img className='user-avatar' src={avatar}></img>
    //     <div className='avatar-and-user'>
    //     <p className='username'>{user.username}</p>
    //         <p className='user-msg'>{msg.body}</p>
    //     </div>
    // </div>
}

export default ChatMessage