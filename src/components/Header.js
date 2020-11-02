import React from 'react';

import './Header.css';

const Header = (props) => {
  console.log(props);
  return (
    <header id="avatars">
      {props.participants.map((element)=>{ 
        return (
          <div>
            <img src={element.avatar} className="headerPic" />
            <p>{element.username}</p>
          </div>
        )
      })}
    </header>
  );
};

export default Header;
