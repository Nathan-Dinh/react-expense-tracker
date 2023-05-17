import React from "react";
import "./Card.css";

const Card = (props) => {
  const CLASSES = "card " + props.className; // you create a concatenated string that contains all the css className
  return <div className={CLASSES}>{props.children}</div>;
};

export default Card;
