import React from "react";

import Avatar from "./Avatar";

import "./Header.css";

const Header = (props) => {
  return (
    <header>
      {props.participants
        .filter((participant) => participant !== props.currentUser)
        .map((participant) => (
          <div className="participant1">
            <img
              className="avatarTwo"
              src={participant.avatar}
              alt="Seinfeld character"
            />
            <div className="usernameTwo">{participant.username}</div>
          </div>
        ))}
    </header>
  );
};

export default Header;

// {
//   /*  */
// }
