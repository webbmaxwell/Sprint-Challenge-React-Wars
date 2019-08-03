import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portrait() {

  const [pic, setPic] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        // console.log(res.data.results[0]);
        setPic(res.data.url)
      });
  }, [])

  return (
    <div>
      {pic.map(() => {
        return (
          <img src="" alt=""/>
        )
      })}
    </div>
  )
};

export default Portrait;
