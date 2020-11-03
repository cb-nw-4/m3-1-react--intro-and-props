import React from 'react';
import './avatar.css'


const Avatar =(props) =>{


    const {avatar, size} = props.participant;

    return (
           <div className='avatar'>
                   <img className= 'float' src={avatar} width={size} alt='avatar'/> 
            </div>
            
    ) 
}


export default Avatar;