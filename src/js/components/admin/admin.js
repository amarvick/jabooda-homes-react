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
    // var userData = [
    //   { "name": "Alex", "email": "anarvick95@eemail.com", "pending": false },
    //   { "name": "Michael", "email": "mmarvick@eemail.com", "pending": true }
    // ]
    console.log(this.props)

    var userData = this.props.userData
    var careerData = this.props.careerData
    var projectData = this.props.projectData
    var staffData = this.props.staffData

    var allPendingUsers = []
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].pending === true) {
        allPendingUsers.push(userData[i])
      }
    }

    return (
      <div>
        <h1>
          Admin Page
        </h1>
        <UserRequests
          theUserData={allPendingUsers}
          userDataCount={allPendingUsers.length}
        />
        <AllData 
          userData={userData}
          careerData={careerData}
          projectData={projectData}
          staffData={staffData}
        />
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
  errors: state.errors,
  userData: state.user.userData,
  staffData: state.staff.staffData,
  projectData: state.project.projectData,
  careerData: state.career.careerData
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Admin))