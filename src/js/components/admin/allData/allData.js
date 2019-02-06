/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../../stylesheets/allData.scss'

import DataBox from './dataBox'

class AllData extends Component {
  // Displaying all editable data
  render(props) {
    console.log(this.props.staffData)
    console.log(this.props.staffDataKeys)

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
          data={this.props.staffData}
          allKeys={this.props.staffDataKeys}
        />
        
        <DataBox 
          className="careerData"
          dataType="Career"
          data={this.props.careerData}
          allKeys={this.props.careerDataKeys}
        />

        <DataBox 
          className="projectData"
          dataType="Project"
          data={this.props.projectData}
          allKeys={this.props.projectDataKeys}/>
        
        <DataBox 
          className="userData"
          dataType="User"
          data={this.props.userData}
          allKeys={this.props.userDataKeys}/> 
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
  staffDataKeys: state.staff.staffDataKeys,
  careerData: state.career.careerData,
  careerDataKeys: state.career.careerDataKeys,
  projectData: state.project.projectData,
  projectDataKeys: state.project.projectDataKeys,
  userData: state.user.userData,
  userDataKeys: state.user.userDataKeys
})

export default connect(mapStateToProps, mapDispatchToProps)(AllData);