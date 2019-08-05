import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Card.css";

function Card() {

  const [bio, setBio] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
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
          <>
            <p><strong>Name:</strong>{info.name}</p>
            <p><strong>Birth Year:</strong>{info.birth_year}</p>
          </>
        )
      })}

    </div>
  )
};

export default Card;
