import React from 'react';
import './ChatMessage.css';

const SentMessage= (props)=>{
    //console.log(props);
    return(
        <div>
            <div className="sent main">
                {props.message}
                
            </div>
            <img src="/assets/tip-sent.svg" className="sentTip"/>
        </div>
        
    );
};





export default SentMessage;