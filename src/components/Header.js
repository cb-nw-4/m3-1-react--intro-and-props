import React from 'react';
import Avatar from './Avatar'

import './Header.css';

const Header = (props) => {

  return (
    <header>
      {props.participants.map((participant,i) =>{
        if(participant.username !== props.currentUser.username){

          return (
            <Avatar 
              key={i}
              participant ={participant}/>
        ) 
        }

        
      }
      )
    }
    </header>
  )
}




export default Header;
