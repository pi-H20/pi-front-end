import React, { useState, useEffect } from 'react'

//const API = 'http://watermyplant-backend-env.x589jebncj.us-east-1.elasticbeanstalk.com/data'
const API = 'http://localhost:3000/auth/data';


export default function AllData() {
  
  //Set status
  const [readings, setReadings] = useState([]);

  const _getReadings = () => {
    
    // fetch from API
    fetch(API)
    .then( data => data.json() )
    .then( readingList => {
      setReadings(readingList);
      console.log(readingList); 
    })
    .catch( console.error );
  };

  useEffect(_getReadings, []);

  return (
    <>
    <p>Readings</p>
    <ul>
    {readings.map( (reading, index) =>
      <li key={index}>
        <p>{reading.timestamp}</p>
      </li>
    )}
  </ul>
  </>
  )
  
}
