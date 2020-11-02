import React from 'react';
import Avatar from './Avatar'

import './Header.css';

const Header = (props) => {   
  return ( 
    <header>       
      { props.participants.map((participant, index)=>{
          return (
            <div className='user-list' key={index}>
              <Avatar src={participant.avatar} size={{width: "50px", height: "50px"}} alt="avatar" />      
             <p className='user-lits-name'>
              {participant.username } 
            </p>
           </div>
          );
      })      
      }
    </header>
  );
};

export default Header;
