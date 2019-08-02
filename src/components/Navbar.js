import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/piLogo.png';


export default class Navbar extends Component {

  handleLogout = async (e) => {
    e.preventDefault();
    // REMOVE LS TOKEN; UPDATE PARENT STATE
    localStorage.removeItem('serverToken');
    this.props.updateUser();
  }

  render() {
    if(this.props.user){
      return (
        <div>
          <nav className="navbar">
            <div className="nav-wrapper">
              <Link to="/"><img src={logo} className="brand-logo" alt="logo" /></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className = 'menuItem'><Link to="/">Home</Link></li>
                <li className = 'menuItem'><Link to="/aboutus">About Us</Link></li>
                <li className = 'menuItem'><Link to="/profile">Profile</Link></li>
                <li className = 'menuItem'><Link to="/data">All Data</Link></li>
                <li className = 'menuItem' onClick={this.handleLogout.bind(this)}><Link to="/">Logout</Link></li>
              </ul>
            </div>
          </nav>
        </div>

      )
    }
    else {
      return (
        <div>
          <nav className="navbar">
            <div className="nav-wrapper">
              <Link to="/"><img src={logo} className="brand-logo" alt="logo" /></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className = 'menuItem'><Link to="/">Home</Link></li>
                <li className = 'menuItem'><Link to="/aboutus">About Us</Link></li>
                <li className = 'menuItem'><Link to="/login">Log In</Link></li>
                <li className = 'menuItem'><Link to="/signup">Sign Up</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      )
    }  
  }
}

