import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Data from './DataComponents/Data.js';
import CharImg from './ImgComponents/CharImg.js';
import PlanImg from './ImgComponents/PlanImg.js';

function Card() {

  const [cards] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res);

      });
  }, [])

  return (
    <div>
      {cards.map(() => {
        return (
          <div className="card">
            <Data />
            <CharImg />
            <PlanImg />
          </div>
        )
      })}
    </div>
  )
};

export default Card;

// <Data />
// <CharImg />
// <PlanImg />
