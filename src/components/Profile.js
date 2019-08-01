import React, { Component } from 'react';
import SERVER_URL from '../constant/server';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: ""
    }
  }

  _toggleStatus = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let name = e.target.name;

    // patch to the api
    fetch(`${SERVER_URL}/${id}`, {
      method: 'GET'
    })
    .then(response => {
      this.setState({
        status: name
      })
    })
    .catch( console.error );
  };

  // Helper function to capitalize the first letter of the first name of user
  firstCapitalization = (firstName) => {
    if(firstName != null){
      return firstName.charAt(0).toUpperCase() + firstName.slice(1)
    }

  }

  render() {
    return (
      <div>
        <h2>Welcome {this.firstCapitalization(this.props.user.name)}</h2>
        <div>{this.state.status}</div>
        <form onSubmit={this._toggleStatus} name="Successfully turned auto water ON" id="auto_water_on">
          <button>Turn on Auto-water</button>
        </form>
        <form onSubmit={this._toggleStatus} name="Successfully turned auto water OFF"  id="auto_water_off">
          <button>Turn off Auto-water</button>
        </form>
        <form onSubmit={this._toggleStatus} name="Successfully Watered once!" id="water_once">
          <button>Water Once</button>
        </form>
      </div>
    )
  }
}
