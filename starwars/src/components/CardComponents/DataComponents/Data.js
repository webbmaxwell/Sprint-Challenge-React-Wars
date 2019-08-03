import React from 'react';

function Data(props) {
  return (
    <div>
      <p><strong>Name:</strong>{props.name}</p>
      <p><strong>Homeworld:</strong>{props.homeworld}</p>
    </div>
  )
};

export default Data;
