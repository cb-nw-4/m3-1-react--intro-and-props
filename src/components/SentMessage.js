import React from 'react';
import './SentMessage.css'

const SentMessage = ({myMsg}) => {
    return <div className='my-div'>
        <p className='my-msg'>{myMsg.body}</p>
        <img className='sent-tip' src='./assets/tip-sent.svg'></img>
    </div>
}
    


export default SentMessage;