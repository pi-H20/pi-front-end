import React, { Component } from 'react'
// import SERVER_URL from '../constant/server'


export default class Profile extends Component {
  render() {
    return (
      <div>
        {/* TODO Add 3 buttons ALL data, Toggle On/Off */}
        <form action="http://localhost:3000/autoWaterOn" method="GET">
          <input type="submit" name="waterOn" id="waterOn" value="Turn my Water On JEN!"/>
        </form>
        <form action="http://localhost:3000/autoWateroff" method="GET">
          <input type="submit" name="waterOff" id="waterOff" value="Turn my Water Off biiiiiiiiiitch!"/>
        </form>
        <form action="http://localhost:3000/water_once" method="GET">
          <input type="submit" name="waterOnce" id="waterOnce" value="Water My Shit Once!"/>
        </form>
      </div>
    )
  }
}
