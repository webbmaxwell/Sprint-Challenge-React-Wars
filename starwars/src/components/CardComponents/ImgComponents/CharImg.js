import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharImg() {

  const [charImg] = useState('https://swapi.co/api/people/1/');

  useEffect(() => {
    axios.get('https://swapi.co/api/people?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
      })
  }, [])

  return (
    <img />
  )
};

export default CharImg;
