import React from 'react';
import './ChatMessage.css';

const SentMessage= (props)=>{
    //console.log(props);
    return(
        <div className="sent main">
            {props.message}
        </div>
    );
};





export default SentMessage;