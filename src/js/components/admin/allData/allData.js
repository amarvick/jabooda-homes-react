/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../../stylesheets/allData.scss'

import LoadingScreen from '../../loadingScreen'
import ErrorScreen from '../../errorScreen'
import DataBox from './dataBox'

class AllData extends Component {

  // Displaying all editable data
  render(props) {
    var areOrIs, singularOrPlural

    return (
      <div>
        <h2>
            All Data
        </h2>
        <h4>
            Click on any of the boxes to modify existing data
        </h4>
        <DataBox 
          className="staffData"
          dataType="Staff"
          data={this.props.staffData}/>
        
        <DataBox 
          className="careerData"
          dataType="Careers"
          data={this.props.careerData}/>

        <DataBox 
          className="projectData"
          dataType="Projects"
          data={this.props.projectData}/>
        
        <DataBox 
          className="userData"
          dataType="Users"
          data={this.props.userData}/>
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
  error: state.career.error,
  loading: state.career.loading,
  staffData: state.staff.staffData,
  careerData: state.career.careerData,
  projectData: state.staff.projectData,
  userData: state.user.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(AllData);