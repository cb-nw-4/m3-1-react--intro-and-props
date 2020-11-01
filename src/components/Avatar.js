import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    console.log(`Avatar props`,props);
     return (
         <div className='avatar-div'> 
             <img 
                src={props.participant.avatar} 
                className= "avatar" 
                alt='avatar'/>  
             <p className = "header-user">
                {props.participant.username}
            </p>
         </div>
     )
};

export default Avatar;