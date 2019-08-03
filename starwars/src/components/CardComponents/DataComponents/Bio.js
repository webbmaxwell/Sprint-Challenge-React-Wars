import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bio() {

  const [bio, setBio] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        // console.log(res.data.results[0]);
        setBio(res.data.results)
      });
  }, [])

  return (
    <div>
      {bio.map((info) => {
        return (
          <div>
            <p><strong>Name:</strong>{info.name}</p>
            <p><strong>Homeworld:</strong>{info.homeworld}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Bio;
