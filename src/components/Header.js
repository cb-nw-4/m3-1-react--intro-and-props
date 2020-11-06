import React from 'react';
import { users } from '../data';

import './Header.css';

const Header = (props) => {
  console.log(props)
  return <header>{
    props.users.map((user) => {
      if (user !== props.currentUser) {
      return (
        <div className="participants">
          <img className="user-img" src={`${user.avatar}`}/>
          <p className="participant-name">{user.username}</p>
        </div>
      )}
    })
    }</header>;
};

export default Header;
