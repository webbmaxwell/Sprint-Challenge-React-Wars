import React from 'react';
import "./Card.css";

function Card(props) {

    return (
      <div className="card">
        <p><strong>Name:</strong>{props.name}</p>
        <p><strong>Birth Year:</strong>{props.year}</p>
      </div>
    )
};

export default Card;
