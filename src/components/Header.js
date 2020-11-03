import React from 'react';

import './Header.css';

const Header = (props) => {
  let otherUsers = props.users.filter((user)=>{
    return user !== props.currentUser;
  })
  return <header>{
    otherUsers.map((user)=>{
     return <div className='participants-avatar' >
       <img src={user.avatar} className='header-avatar' alt=''/>
       <p>{user.username}</p>
     </div>
    })
    
    }</header>;
};

export default Header;
