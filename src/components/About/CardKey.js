import React from "react";
import "../../App.css";

const Card = ({ logo, title, subTitle, description }) => {
  return (
    <div className="cardKey">
      <img src={logo} alt="Logo" className="cardKey-logo" />
      <div className="cardKey-title">{title}</div>
      <div className="cardKey-subTitle">{subTitle}</div>
      <div className="cardKey-description">{description}</div>
    </div>
  );
};

export default Card;
