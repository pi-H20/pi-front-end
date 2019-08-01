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
  
  render() {
    return (
      <div>
        <h1>Welcome: {this.props.user.name}</h1>
        <h2>email: {this.props.user.email}</h2>
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
