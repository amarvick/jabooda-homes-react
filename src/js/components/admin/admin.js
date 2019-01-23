/* File Name: about.js                                                      *
 * Description: About the team & company                                    */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import classnames from 'classnames'

import '../../../stylesheets/about.scss'

import AllData from './allData/allData'
import UserRequests from './userRequests/userRequests'

import { logoutUser } from "../../actions/authActions";

class Admin extends Component {
  
  logOut = e => {
    e.preventDefault()
    this.props.logoutUser()

  }

  render() {    
    return (
      <div>
        <h1>
          Admin Page
        </h1>
        <UserRequests/>
        <AllData/>
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

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Admin))