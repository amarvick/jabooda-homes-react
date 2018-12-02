/* File Name: header.js                                              *
 * Description: Header displayed on the website. Includes nav menu   */

import React, { Component, StartupActions } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Design + React Material UI
import '../../stylesheets/header.scss'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';

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
        {/* <Router>  */}
          <ul>             
            <li style={style} className="active"><NavLink to="/"><span class="fa fa-home fa-lg"/>Home</NavLink></li>
            <li style={style}><NavLink to="/about"><span class="fa fa-info fa-lg"/>About Us</NavLink></li>
            <li style={style}><NavLink to="/projects"><span class="fa fa-map-o fa-lg"/>Projects</NavLink></li>
            <li style={style}><NavLink to="/careers"><span class="fa fa-briefcase fa-lg"/>Careers</NavLink></li>
            <li style={style}><NavLink to="/contactus"><span class="fa fa-address-card fa-lg"/>Contact Us</NavLink></li>
          </ul>
          {/* </Router> */}
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