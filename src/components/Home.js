import React, { Component } from 'react'
import logo from '../images/pi_logo_transparent.png';

export default class Home extends Component {

  render() {
    return (
      <div>
        <img src={logo} alt="logo" />
        <p>This Is the HOME landing page! :) </p>
      </div>
    )
  }
}
