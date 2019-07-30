import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


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
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/"><FontAwesomeIcon className = 'homeIcon' icon={faHome} /></a></li>
                <li className = 'menuItem'><Link to="/">Home</Link></li>
                <p>Water My Plant</p>
                <li className = 'menuItem'><Link to="/aboutus">About Us</Link></li>
                <li className = 'menuItem'><Link to="/profile">Profile</Link></li>
                <li><button className="logout-button" onClick={this.handleLogout}><Link to="/">Logout</Link></button></li>
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
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/"><FontAwesomeIcon className = 'homeIcon' icon={faHome} /></a></li>
                <li className = 'menuItem'><Link to="/">Home</Link></li>
                <p>Water My Plant</p>
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

