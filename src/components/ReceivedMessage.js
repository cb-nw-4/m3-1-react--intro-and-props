import React from 'react';
import './ReceivedMessage.css';

const ReceivedMessage = ({theirAvatar, theirUser, theirMsg}) => {
    return <div className='whole-div'>
        <img className='their-avatar' src={theirAvatar}></img>
        <div className='username-and-text'>
            <p className='their-username'>{theirUser.username}</p>
            <p className='their-text'>{theirMsg.body}</p>
        </div>
    </div>
}

export default ReceivedMessage;