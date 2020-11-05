import React from 'react';

const ReceivedMessage = (props) => {
    return (
        <div className='chat-message'>
          <img src={props.message.user.avatar} alt="Avatar Pic"/>
            <div className='name-message'>
                <h1>{props.message.user.username}</h1>
                <p>{props.message.body}</p>
            </div>
        </div>
    )};


export default ReceivedMessage;