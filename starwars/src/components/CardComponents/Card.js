import React from 'react';
import styled from 'styled-components';
import "./Card.css";

function Card(props) {

  const Par = styled.p`
    font-size 1.5rem;
    color: white;
    text-shadow: 0px 0px 1rem limegreen;
  `

  return (
    <div className="card">
      <Par><strong>Name:</strong>{props.name}</Par>
      <Par><strong>Birth Year:</strong>{props.year}</Par>
    </div>
  )
};

export default Card;
