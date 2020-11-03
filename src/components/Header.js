import React from 'react';
import Avatar from './Avatar'

import './Header.css';

const Header = (props) => {

  return (
    <header>
        {props.participants.map((participant,i) =>{
        if(participant.username !== props.currentUser.username){

          return (
            <React.Fragment  key={i}>
              <div>
                <Avatar 
                  participant ={participant}/> 

                <div>{participant.username}</div>
              </div>
              
            </React.Fragment>
                    
        ) 
        }

        
      }
      )
    }
      
    </header>
  )
}




export default Header;
