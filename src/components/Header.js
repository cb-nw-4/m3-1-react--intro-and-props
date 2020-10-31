import React from 'react';

import './Header.css';
const Header = ({participants, currentUser}) => {
  const FRIENDS = participants.filter((user) => {
    return user !== currentUser;
  })
  // console.log(participants, 'avatars');
  // console.log(FRIENDS);
  return <header>
    {FRIENDS.map((user)=> {
      return <div className='container'>
        <img className='avatar' src={user.avatar}></img>
        <p className='username'>{user.username}</p>
      </div>
    })}
  </header>;
};

export default Header;
