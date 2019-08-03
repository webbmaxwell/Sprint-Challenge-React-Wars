import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharImg() {

  const [charImg] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res);
      })
  }, [])

  return (
    <img />
  )
};

export default CharImg;
