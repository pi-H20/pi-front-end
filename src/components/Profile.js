import React, { useState } from 'react';
// import SERVER_URL from '../constant/server'

//const API = 'http://watermyplant-backend-env.x589jebncj.us-east-1.elasticbeanstalk.com'
const API = 'http://localhost:3000';

export default function Profile() {

  const [status, setStatus] = useState('');

  const _toggleStatus = (e) => {
    e.preventDefault();
    let id = e.target.name;
    console.log(id);

    // patch to my api
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
        {/* TODO Add 3 buttons ALL data, Toggle On/Off */}
        <form onSubmit={_toggleStatus} name="auto_water_on" id="auto_water_on">
          <button>Turn on the Water</button>
        </form>
        <form onSubmit={_toggleStatus} name="auto_water_off" id="waterOff">
          <button>Turn off the Water</button>
        </form>
        <form onSubmit={_toggleStatus} name="water_once" id="waterOnce">
          <button>Water Once</button>
        </form>
      </div>
    )
  }

