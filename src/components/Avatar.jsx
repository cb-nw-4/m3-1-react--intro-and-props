import React from "react";
import "./Avatar.css";

const Avatar = (props) => {
  return <img className="avatar" src={props.ava} alt="Seinfeld character" />;
};

export default Avatar;
