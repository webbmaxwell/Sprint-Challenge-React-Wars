import React from 'react';

import Data from './DataComponents/Data.js';
import CharImg from './ImgComponents/CharImg.js';
import PlanImg from './ImgComponents/PlanImg.js';

function Card() {
  return (
    <div className="Card">
      <Data />
      <CharImg />
      <PlanImg />
    </div>
  )
};

export default Card;
