/* File Name: header.js                                                     *
 * Description: Header displayed on the website. Includes nav menu          */

import React, { Component, StartupActions } from 'react'
import { NavLink, Link } from 'react-router-dom';

// Design + React Material UI
import '../../stylesheets/header.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      displayMenuButton: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  // When user clicks off screen
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
    const style = {
        marginLeft: 15,
        marginRight: 15
    };

    var displayMenuButton = this.state.displayMenuButton
    var displayMenuItems;

    // AM - componentize these links
    if (displayMenuButton) {
      displayMenuItems = (
        <ul>              
          <li style={style} className="active"><NavLink to="/"><span class="fa fa-home fa-lg"/><span class="menuText">Home</span></NavLink></li>
          <li style={style}><NavLink to="/about"><span class="fa fa-info fa-lg"/><span class="menuText">About Us</span></NavLink></li>
          <li style={style}><NavLink to="/projects"><span class="fa fa-map-o fa-lg"/><span class="menuText">Projects</span></NavLink></li>
          <li style={style}><NavLink to="/careers"><span class="fa fa-briefcase fa-lg"/><span class="menuText">Careers</span></NavLink></li>
          <li style={style}><NavLink to="/contactus"><span class="fa fa-address-card fa-lg"/><span class="menuText">Contact Us</span></NavLink></li>
        </ul>
      )
    }

    return (
      <div className = 'headerComponent'>

        <div id="buttonMenu">
          <span href="#" onClick={this.toggleMenu} class="fa fa-bars fa-lg"/>
          <ReactCSSTransitionGroup
            transitionName="menuDisplay"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>

            { displayMenuItems }
          </ReactCSSTransitionGroup>
        </div>
  
        <div id="expandedMenu">
          <ul>             
            <li style={style} className="active">
              <Link to="/">
                <span class="fa fa-home fa-lg"/>Home
              </Link>
            </li>

            <li style={style}>
              <Link to="/about">
                <span class="fa fa-info fa-lg"/>About Us
              </Link>
            </li>
            
            <li style={style}>
              <Link to="/projects">
                <span class="fa fa-map-o fa-lg"/>Projects
              </Link>
            </li>
            
            <li style={style}>
              <Link to="/careers">
                <span class="fa fa-briefcase fa-lg"/>Careers
              </Link>
            </li>
            
            <li style={style}>
              <Link to="/contactus">
                <span class="fa fa-address-card fa-lg"/>Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


// AM To do - make it so this operates like a single page application

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