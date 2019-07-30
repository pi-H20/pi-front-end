import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constant/server';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleNameChange = (e) => { this.setState({ name: e.target.value }); }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = async (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    await axios.post(`${SERVER_URL}/auth/signup`, this.state)
    .then(response => {
      // Assume we have a token that we should save to LS
      localStorage.setItem('serverToken', response.data.token);
      // Need to update... somehow
      this.props.updateUser();
    })
    .catch(err => {
      console.log('ERROR when submitting signup form', err);
    });
  }

  render() {
    if(this.props.user){
      return (<Redirect push to="/profile" />);
    }
    return(
        <div className = 'signupDiv'>
          <h2>Signup as a new user</h2>
          <form className = 'signupForm' onSubmit={this.handleSubmit}>
            <div>
            <label><b>Name</b></label>
              <input name="Name" placeholder="What is your name" value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div>
            <label><b>Email Address</b></label>
              <input name="Email" placeholder="What is your email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
            <label><b>Password</b></label>
              <input name="Password" type="Password" placeholder="What is your password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <input type="submit" value="Sign Me Up!" className="button" />
          </form>
        </div>
      );
  }
}

export default Signup;
