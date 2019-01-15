/* File Name: header.js                                                     *
 * Description: Header displayed on the website. Includes nav menu          */

import React, { Component } from 'react'

// Design + React Material UI
import '../../stylesheets/header.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MenuLink from './menuLink'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      displayMenuButton: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  // AM - When user clicks off screen. Fix
  hideMenu() {
    this.setState({
      displayMenuButton: false
    })
  }

  toggleMenu() {
    var newValue = !this.state.displayMenuButton;

    this.setState({
      displayMenuButton: newValue
    })
  }

  // The question template
  render() {

    var displayMenuButton = this.state.displayMenuButton
    var displayMenuItems;

    if (displayMenuButton) {
      displayMenuItems = (
        <ul>
          <MenuLink
            link="/"
            icon="fa fa-home fa-lg"
            spanClass="menuText"
            page="Home"
          />

          <MenuLink
            link="/about"
            icon="fa fa-info fa-lg"
            spanClass="menuText"
            page="About Us"
          />

          <MenuLink
            link="/projects"
            icon="fa fa-map-o fa-lg"
            spanClass="menuText"
            page="Projects"
          />

          <MenuLink
            link="/careers"
            icon="fa fa-briefcase fa-lg"
            spanClass="menuText"
            page="Careers"
          />

          <MenuLink
            link="/contactus"
            icon="fa fa-address-card fa-lg"
            spanClass="menuText"
            page="Contact Us"
          />

        </ul>
      )
    }

    return (
      <div className='headerComponent'>

        <div id="buttonMenu">
          <span href="#" onClick={this.toggleMenu} class="fa fa-bars fa-lg" />
          <ReactCSSTransitionGroup
            transitionName="menuDisplay"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>

            {displayMenuItems}
          </ReactCSSTransitionGroup>
        </div>

        <div id="expandedMenu">
          <ul>
            <MenuLink
              link="/"
              icon="fa fa-home fa-lg"
              page="Home"
            />

            <MenuLink
              link="/about"
              icon="fa fa-info fa-lg"
              page="About Us"
            />

            <MenuLink
              link="/projects"
              icon="fa fa-map-o fa-lg"
              page="Projects"
            />

            <MenuLink
              link="/careers"
              icon="fa fa-briefcase fa-lg"
              page="Careers"
            />

            <MenuLink
              link="/contactus"
              icon="fa fa-address-card fa-lg"
              page="Contact Us"
            />
          </ul>
        </div>
      </div>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
// const mapDispatchToProps = (dispatch) => ({
//   dispatch: dispatch,
//   startup: () => dispatch(StartupActions.startup())
// })

// // Maps the state in to props (for displaying on the front end)
// const mapStateToProps = (state) => ({
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Error)
export default Header