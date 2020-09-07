import React from "react";
import './cards.scss'

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={require(`../../assets/${props.image}.png`)} alt={props.alt} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Cards;
