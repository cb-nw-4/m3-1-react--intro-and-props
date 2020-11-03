import React from 'react';

import './Header.css';

const Header = (props) => {
  return <header> {props.participants.map(participant => {
      if (props.currentUser !== participant) {
        return <div className='bobblehead'>
          <img className='bob-avatar' src={participant.avatar} alt={participant.username}/>
          <p className='bob-name'>{participant.username}</p>
        </div>
      }
    })
    }</header>;
};

export default Header;
