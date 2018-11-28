/* File Name: projects.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import ProjectData from '../../../data/projects.json'
import MainProject from './mainProject'

import { connect } from 'react-redux'

import '../../../stylesheets/projects.scss'

import Grid from '@material-ui/core/Grid';

class Projects extends Component {
  constructor() {
    super()

    this.state = {
      selectedProject: 0,
      selectedImageInProject: 0
    }
  }

  handleProjectUpdate(index) {
    this.setState({
      selectedImageInProject: 0,
      selectedProject: index
    })
  }

  render() {
    var selectedProject = this.state.selectedProject

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
            <div>AM - put the project type selector here, between sold, in progress and on sale projects</div>
            {ProjectData.map((projectDetail, index) => {
              return (
                <div className="projectContainer" onClick={() => this.handleProjectUpdate(index)}>
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <img height="90" width="120" src={require('../../../images/' + projectDetail.images[0])} />
                    </Grid>
                    <Grid item xs={8}>
                      <h3>{ projectDetail.address }</h3>
                    </Grid>
                  </Grid>
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