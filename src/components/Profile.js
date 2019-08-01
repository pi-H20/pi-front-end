import React, { useState } from 'react';
// import SERVER_URL from '../constant/server'

//const API = 'http://watermyplant-backend-env.x589jebncj.us-east-1.elasticbeanstalk.com'
const API = 'http://localhost:3000';

export default function Profile() {

  //Set status
  const [status, setStatus] = useState('');

  //Function to  call RPI command and update status
  const _toggleStatus = (e) => {
    e.preventDefault();
    let id = e.target.name;
    console.log(id);

    // patch to the api
    fetch(`${API}/${id}`, {
      method: 'GET'
    })
    .then(response => {
      response.text().then((text) => {
        console.log(text);
        setStatus(text);
      })
    })
    .catch( console.error );
  };


  return (
    <div>
      <p>{status}</p>
      <form onSubmit={_toggleStatus} name="auto_water_on" id="autoWaterOn">
        <button>Turn on Auto-water</button>
      </form>
      <form onSubmit={_toggleStatus} name="auto_water_off" id="waterOff">
        <button>Turn off Auto-water</button>
      </form>
      <form onSubmit={_toggleStatus} name="water_once" id="waterOnce">
        <button>Water Once</button>
      </form>
    </div>
  )

  
}

