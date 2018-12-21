/* File Name: projects.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import MainProject from './mainProject'

import { connect } from 'react-redux'

import '../../../stylesheets/projects.scss'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'

import { loadData, handleProjectUpdate, updateTab } from '../../actions/projectActions'

class Projects extends Component {

  updateTab(tab) {
    this.setState({ selectedTab: tab })
  }

  render() {
    var selectedProject = this.props.selectedProject
    var projectsToDisplay = this.props.projectsToDisplay
    var theProjectData = this.props.projectData
    var projectsInTab = [];

    // AM - better way of doing this??
    for (var i = 0; i < theProjectData.length; i++) {
      if (theProjectData[i].status === projectsToDisplay) {
        projectsInTab.push(theProjectData[i])
      }
    }

    return (
      <div className = 'projectsComponent'>
        <Grid container spacing={24}>
          <Grid item xs={12} md={8}>
            <MainProject
              selectedProject={theProjectData[selectedProject]}
              selectedImageInProject={0}
            />
          </Grid>
          <Grid item md={4}>
            <Tabs>
              <Tab onClick={() => this.props.dispatch(updateTab('Sold'))} label="Sold"/>
              <Tab onClick={() => this.props.dispatch(updateTab('For Sale'))} label="For Sale"/>
              <Tab onClick={() => this.props.dispatch(updateTab('In Progress'))} label="In Progress"/>
            </Tabs>
            <hr/>
            {projectsInTab.map((projectDetail, index) => {
              return (
                <div className="projectContainer" onClick={() => this.props.dispatch(handleProjectUpdate(projectDetail.id))}> 
                  <Grid container spacing={24}>
                    <Grid item>
                      <img height="90" src={require('../../../images/' + projectDetail.images[0])} />
                    </Grid>
                    <Grid item>
                      <h3>{ projectDetail.address }</h3>
                    </Grid>
                  </Grid>

                  <hr/>
                </div>
              ) 
            })}
          </Grid>
        </Grid>
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
  projectData: state.project.projectData,
  projectsToDisplay: state.project.projectsToDisplay,
  selectedProject: state.project.selectedProject,
  selectedImageInProject: state.project.selectedImageInProject
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);