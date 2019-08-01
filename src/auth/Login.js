import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constant/server';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // SEND DATA TO SERVER
    axios.post(`${SERVER_URL}/auth/login`, this.state)
    .then(response => {
      localStorage.setItem('serverToken', response.data.token.toString());
      this.props.setEmail(this.state.email);
      this.props.updateUser();
      
    })
    .catch(err => {
      console.log(`Error logging in.`, err);
    });
  }



  render() {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return(
        <div className='loginDiv'>
          <h2>Login as an existing user</h2>
          <form className = 'loginForm' onSubmit={this.handleSubmit}>
            <div>
             <label><b>Email Address</b></label>
              <input name="Email" value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div>
            <label><b>Password</b></label>
              <input name="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            </div>
            <input type="submit" value="Log Me In!" className="button" />
          </form>
        </div>
      );
  }
}

export default Login;
