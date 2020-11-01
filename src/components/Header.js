import React from 'react';

import './Header.css';
import Avatar from './Avatar';

const Header = (props) => {
  console.log(`Header:`,props);
  let activeParticipants = [];
  activeParticipants = props.participants.filter(participant => {
    if (participant.username !== props.currentUser.username) {
      return true}
    else return false;
  })
  console.log(activeParticipants);
  return <header>{
     activeParticipants.map((participant, i)=> {
       console.log(participant);
      return <Avatar key={i} participant={participant}/> 
     })
    
    }</header>;
};

export default Header;
