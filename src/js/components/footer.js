/* File Name: footer.js                                                     *
 * Description: Footer displayed on the website                             */

import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

import '../../stylesheets/footer.scss'

import MenuLink from './menuLink'
import SocialMediaLink from './socialMediaLink'

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
        <ul id="socialMediaLinks">
          <SocialMediaLink
            link="/"
            icon="fa fa-facebook-f fa-2x"
          />

          <SocialMediaLink
            link="/"
            icon="fa fa-instagram fa-2x"
          />

          <SocialMediaLink
            link="/"
            icon="fa fa-linkedin fa-2x"
          />
        </ul>

        <ul id="footerNavMenu">
          <MenuLink
            style={style}
            link="/"
            page="Home"
          />

          <MenuLink
            style={style}
            link="/about"
            page="About Us"
          />

          <MenuLink
            style={style}
            link="/projects"
            page="Projects"
          />

          <MenuLink
            style={style}
            link="/careers"
            page="Careers"
          />

          <MenuLink
            style={style}
            link="/contactus"
            page="Contact Us"
          />
        </ul>

        <img id="combinedLogos" src={require("../../images/combinedlogos.png")} />

        <p>Jabooda Homes, Inc. {currentYear}</p>
      </div>
    )
  }
}

export default Footer