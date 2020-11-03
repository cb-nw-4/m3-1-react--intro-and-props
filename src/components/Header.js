import React from 'react';
import './Header.css';

const Header = (props) => {
  return <header>
    {props.participants.map((participant) => {
      if (props.currentUser !== participant) {
        return <div className='participants'>
          <div><img src={participant.avatar} className='avatar' alt='avatar' /></div>
          <div>{participant.username}</div>
        </div>
      }
    })}
  </header>;
};

export default Header;
