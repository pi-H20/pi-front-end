import React, { Component } from 'react'
import video from '../images/plantVideo2.mp4'



export default class Home extends Component {


  render() {
    return (
      <div>
        <div className="section">
        <h1 className="homeTitle">Welcome to Pi-H20</h1>
        

        <div className="video-container">
            <div className="color-overlay"></div>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>

        </div>
      </div>
    )
  }
}
