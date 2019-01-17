/* File Name: about.js                                                      *
 * Description: About the team & company                                    */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import classnames from 'classnames'

import '../../../stylesheets/about.scss'

// import LoadingScreen from '../loadingScreen'
import { logoutUser } from "../../actions/authActions";

class Admin extends Component {
  
  logOut = e => {
    e.preventDefault()
    this.props.logoutUser()

  }

  render() {    
    return (
      <div>
        Admin Page
        <p onClick={this.logOut}>Log out</p>
      </div>
    )
  }
}

Admin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

// // wraps dispatch to create nicer functions to call within our component
// // Mapping dispatch actions to the props
// const mapDispatchToProps = (dispatch) => ({
//   dispatch: dispatch,
//   startup: () => dispatch(StartupActions.startup())
// })

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Admin))