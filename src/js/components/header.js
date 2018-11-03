/* File Name: header.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux'

// Design + React Material UI
import '../../stylesheets/header.scss'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // The question template
  render(props) {    
    const style = {
        marginLeft: 15,
        marginRight: 15
    };

    return (
      <div className = 'headerComponent'>
        <MuiThemeProvider>
          <div>
            <ul>              
              <li style={style} className="active"><a href="/">Home</a></li>
              <li style={style}><a href="/about">About Us</a></li>
              <li style={style}><a href="/projects">Projects</a></li>
              <li style={style}><a href="/careers">Careers</a></li>
              <li style={style}><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup())
})

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
})

// export default connect(mapStateToProps, mapDispatchToProps)(Error)
export default Header