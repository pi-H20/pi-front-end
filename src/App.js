import React, { Component } from 'react'
import axios from 'axios';
import SERVER_URL from './constant/server';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Profile from './components/Profile';
import AllData from './components/AllData';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        email: null,
        name: null,
      },
      email: null
    }
  }

  componentDidMount = () => {

    this.getUser();
    this.setEmail();
    
  }

  getUser = () => {
    // SEE IF THERE'S A TOKEN
    let token = localStorage.getItem('serverToken');
    // IF THERE IS, TRY TO GET USER INFO
    if(token){
      console.log('Found token in LS', token);
      console.log(this.state.user);
      axios.post(`${SERVER_URL}/auth/current/user`, {
        headers: { 'Authorization': `Bearer ${token}`},
        body: this.state.email
      })
      .then(response => {
        this.setState({
          user: {
            email: response.data.email,
            name: response.data.name
          }
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

  setEmail = (email) => {
    this.setState({
      email: email
    })
  }


  render() {
    if(this.state.user){
      return (
        <div>
          <Router>
            <Navbar user={this.state.user} updateUser={this.getUser} />
            <Route exact path="/" component={
              () => (<Home />)
            } />
            <Route path="/aboutus" component={
              () => (<AboutUs />)
            } />
            <Route path="/login" component={
                () => (<Login user={this.state.user} updateUser={this.getUser} setEmail={this.setEmail} />)
              } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} setEmail={this.setEmail} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/data" component={
              () => (<AllData user={this.state.user} updateUser={this.getUser} />)
            } />
          </Router>
        </div>
      )
    } else {
      return (
        <div>
          <Router>
            <Navbar user={this.state.user} updateUser={this.getUser} />
            <Route exact path="/" component={
              () => (<Home />)
            } />
            <Route path="/aboutus" component={
              () => (<AboutUs />)
            } />
            <Route path="/login" component={
                () => (<Login user={this.state.user} updateUser={this.getUser} setEmail={this.setEmail} />)
              } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} setEmail={this.setEmail} />)
            } />
          </Router>
        </div>
      )
    }
    
  }
}
