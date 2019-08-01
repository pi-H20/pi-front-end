import React, { useState, useEffect } from 'react'

//const API = 'http://watermyplant-backend-env.x589jebncj.us-east-1.elasticbeanstalk.com/data'
const API = 'http://localhost:3000/auth/data';

export default function AllData() {
  
  //Set status
  const [readings, setReadings] = useState([]);

  //Convert timestamp from epoch to readable date
  const convert = (cur) => {
    cur.timestamp = new Date(cur.timestamp * 1000).toLocaleString();
    return cur;
  }

  //get readings from the API
  const _getReadings = () => {
    
    // fetch from API
    fetch(API)
    .then( data => data.json())
    .then(readingList => {
       readingList.reverse();
       setReadings(readingList);
    })

    .catch( console.error );
  };

  useEffect(_getReadings, []);
  
  return (
    <>
    <div className="main">
        <div className="all-data">
            <h1>Times the plant was watered:</h1>
            <table id="all-data-table">

                    {readings.map( (reading, index) =>
                     <tr>
                      <td key={index}>
                        {index+1} : {convert(reading).timestamp.toString()}
                      </td>
                        </tr>
                    )}

            </table>
        </div>
    </div>
  </>
  )
  
}
