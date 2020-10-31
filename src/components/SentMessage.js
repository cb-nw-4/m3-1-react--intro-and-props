import React from 'react';
import './SentMessage.css'

const SentMessage = ({myMsg}) => {
    return <div className='my-div'>
        <p className='my-msg'>{myMsg.body}</p>
    </div>
}
    


export default SentMessage;