import React from 'react';

import './Header.css';

const Header = (props) => {
  console.log(props,"Header props");
  let headerParticipants = props.participants.filter ((participant)=> { 
    return participant.username!==props.currentUser.username;
  }); 
  console.log(headerParticipants,"headerParticipants");
  return (
    <header>
      {headerParticipants.map ((participant, index)=> {
        return (
        <div className="headerDiv" key={index}>
          <img
            className="avatarHeader"
            src={participant.avatar}
            alt={participant.avatar}
            />
            <span>{participant.username}</span>
        </div>
        ); 
      })} 
    </header>
  );
};

export default Header;
