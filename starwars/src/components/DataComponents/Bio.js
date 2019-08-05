import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from "../CardComponents/Card.js";

function Bio() {

  const [bio, setBio] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        // console.log(res.data.results);
        setBio(res.data.results);
      })
      .catch(res => {
        console.log("Error in retrieving data: ", res);
      })
  }, [])

  return (
    <div>
      {bio.map((info) => {
        console.log(info);
        return (
          <Card name={info.name} year={info.birth_year} />
        )
      })}

    </div>
  )
};

export default Bio;
