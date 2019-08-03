import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Planet() {

  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        // console.log(res.data.results[0]);
        setPlanet(res.data.url)
      });
  }, [])

  return (
    <div>
      {planet.map(() => {
        return (
          <img src="" alt=""/>
        )
      })}
    </div>
  )
};

export default Planet;
