import React from "react";

import "./Header.css";




const Header = ({currentUser, participants}) => {
  let newArr = participants.filter(person => {
    if (person.username !== currentUser.username){
      return person
    }
  })

  return (
    <header>
      {newArr.map(person => {
        return <div className = 'user-images'>
          <img className ='top-images' src={person.avatar}/>
          <div className='top-images-name'>{person.username}</div>
        </div>
      })}
    </header>
  );
};

export default Header;