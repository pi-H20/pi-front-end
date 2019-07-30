import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from './constant/server';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = async () => {
    this.getUser();
  }

  getUser = () => {
    // SEE IF THERE'S A TOKEN
    let token = localStorage.getItem('serverToken');
    // IF THERE IS, TRY TO GET USER INFO
    if(token){
      axios.post(`${SERVER_URL}/auth/current/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        this.setState({
          user: response.data.user
        });
      })
      .catch(err => {
        console.log('Error looking up user by token', err, err.response);
        this.setState({ user: null });
      });
    }
    else {
      console.log('No token in LS');
      this.setState({ user: null });
    }
  }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
