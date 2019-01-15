/* File Name: about.js                                                      *
 * Description: About the team & company                                    */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../stylesheets/about.scss'

// import LoadingScreen from '../loadingScreen'

class Admin extends Component {
  
  render() {    
    return (
      <div>
        Admin Page
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
  state: state,
  error: state.staff.error,
  staffData: state.staff.staffData,
  projectData: state.project.projectData,
  careerData: state.career.careerData
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)