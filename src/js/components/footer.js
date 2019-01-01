/* File Name: footer.js                                              *
 * Description: Footer displayed on the website                      */

import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../../stylesheets/footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render(props) {
    var currentYear = new Date().getFullYear()

    const style = {
      marginLeft: 15,
      marginRight: 15,
    };

    return (
      <div className="footerComponent">

        {/* AM - componentize */}
        <ul id="socialMediaLinks">
          <li style={style} className="socialMedia">
            <a href="/">
              <span class="fa fa-facebook-f fa-2x" />
            </a>
          </li>

          <li style={style} className="socialMedia">
            <a href="/">
              <span class="fa fa-instagram fa-2x" />
            </a>
          </li>

          <li style={style} className="socialMedia">
            <a href="/">
              <span class="fa fa-linkedin fa-2x" />
            </a>
          </li>
        </ul>

        {/* AM - componentize */}
        <ul id="footerNavMenu">
          <li style={style}>
            <Link to="/">
              Home
            </Link>
          </li>
          
          <li style={style}>
            <Link to="/about">
              About Us
            </Link>
          </li>
          
          <li style={style}>
            <Link to="/projects">
              Projects
            </Link>
          </li>
          
          <li style={style}>
            <Link to="/careers">
              Careers
            </Link>
          </li>
          
          <li style={style}>
            <Link to="/contactus">
              Contact Us
            </Link>
          </li>
        </ul>
        
        <img id="combinedLogos" src={require("../../images/combinedlogos.png")} />

        <p>Jabooda Homes, Inc. {currentYear}</p>
      </div>
    )
  }
}

export default Footer