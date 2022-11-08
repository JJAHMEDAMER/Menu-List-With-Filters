import React from "react";

const Card = (props) => (
  <div className="card">
    <img className="card--img" src={props.img} />
    <div className="card--info">
      <div className="card--bar">
        <h1 className="card--bar--title">{props.title}</h1>
        <p className="card--bar--price">${props.price}</p>
      </div>
      <div className="card--divider"></div>
      <p className="card--desc">{props.desc}</p>
    </div>
  </div>
);

export default Card;
