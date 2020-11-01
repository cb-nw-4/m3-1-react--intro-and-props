import React from 'react';

import './Header.css';
import Avatar from './Avatar.js';

const Header = (props) => {
  return (
    <header>{props.participantsInHeader.map(participant => {
      if (participant.username !== 'Elaine') {
        return (
          <div className='participant-container'>
            <Avatar
              imageUrl={participant.avatar}
              size={60}
            /> 
            <span className='participant-name'>{participant.username}</span>
          </div>
        );
      }
      else {
        return null;
      }
  })}
  </header>
  );
}

export default Header;
