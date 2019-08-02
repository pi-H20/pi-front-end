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
      <div className="componentDiv">
        <h2>Welcome {this.firstCapitalization(this.props.user.name)}!</h2>
        <p>How would you like to water your plant today?</p>
        <h3>{this.state.status}</h3>
        <form onSubmit={this._toggleStatus} name="Successfully turned auto water ON" id="auto_water_on">
          <button class="btn waves-effect waves-light" name="action">Turn on Auto-water</button>
        </form>
        <form onSubmit={this._toggleStatus} name="Successfully turned auto water OFF"  id="auto_water_off">
          <button class="btn waves-effect waves-light" name="action">Turn off Auto-water</button>
        </form>
        <form onSubmit={this._toggleStatus} name="Successfully Watered once!" id="water_once">
        <button class="btn waves-effect waves-light" name="action">Water Once</button>
        </form>
      </div>
    )
  }
}
