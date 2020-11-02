import React from 'react';

import './Header.css';

const Header = (props) => { 

  let filteredParticipants = props.participants.filter((participant) => { 
    return participant !== props.currentUser;
  }) 
  console.log(filteredParticipants);
  return (<header>
    {filteredParticipants.map ((personOnline) => { 
      return ( <div className="headerOnline">
      
        <img src={personOnline.avatar} key={personOnline.username} /> 
        <p>{personOnline.username}</p> 
        </div>
       )
    })}

    </header>);
};

export default Header;
