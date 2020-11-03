import React from 'react';
import './avatar.css'


const Avatar =(props) =>{


    const {avatar, username} = props.participant;

    return (
           <div className='avatar'>
               <div>
                   <img src={avatar} alt='avatar'/> 
               </div>
                
                <div>{username}</div>
            </div>
            
            

    ) 
}


export default Avatar;