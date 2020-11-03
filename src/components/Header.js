import React from 'react';

import './Header.css';

import Avatar from './Avatar.js'

const Header = (props) => {
  return <header>{props.users.map(user => {
      if (user !== props.currentUser) {
        return (
          <div className='participant-container'>
            <img className='user-avatar' src={`${user.avatar}`} /> 
            <p className='participant-name'>{user.username}</p>
          </div>
        )}
    })
  }
  </header>
}

export default Header;
