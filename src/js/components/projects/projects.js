/* File Name: projects.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import ProjectData from '../../../data/projects.json'
import MainProject from './mainProject'

import { connect } from 'react-redux'

import '../../../stylesheets/projects.scss'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'

class Projects extends Component {
  constructor() {
    super()

    this.state = {
      selectedProject: 0,
      selectedImageInProject: 0,
      selectedTab: 'Sold'
    }
  }

  handleProjectUpdate(id) {
    this.setState({
      selectedImageInProject: 0,
      selectedProject: id
    })
  }

  updateTab(tab) {
    this.setState({ selectedTab: tab })
  }

  render() {
    var selectedProject = this.state.selectedProject
    var selectedTab = this.state.selectedTab
    var theProjectData = this.props.projectData
    var projectsInTab = [];

    // AM - better way of doing this??
    for (var i = 0; i < theProjectData.length; i++) {
      if (theProjectData[i].status === selectedTab) {
        projectsInTab.push(theProjectData[i])
      }
    }

    return (
      <div className = 'projectsComponent'>
        <Grid container spacing={24}>
          <Grid item sm={8}>
            <MainProject
              selectedProject={ProjectData[selectedProject]}
              selectedImageInProject={0}
            />
          </Grid>
          <Grid item sm={4}>
            <Tabs>
              <Tab onClick={() => this.updateTab('Sold')} label="Sold"/>
              <Tab onClick={() => this.updateTab('For Sale')} label="For Sale"/>
              <Tab onClick={() => this.updateTab('In Progress')} label="In Progress"/>
            </Tabs>
            <hr/>
            {projectsInTab.map((projectDetail, index) => {
              return (
                <div className="projectContainer" onClick={() => this.handleProjectUpdate(projectDetail.id)}>
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <img height="90" width="120" src={require('../../../images/' + projectDetail.images[0])} />
                    </Grid>
                    <Grid item xs={8}>
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
  projectData: state.project.projectData
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);