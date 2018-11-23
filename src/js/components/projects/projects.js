/* File Name: projects.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import ProjectData from '../../../data/projects.json'
import MainProject from './mainProject'


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
        <div> {/* Grid component */}
          <MainProject
            selectedProject={ProjectData[selectedProject]}
            selectedImageInProject={0}
          />
        </div>
        <div> {/* Grid component */}
          {ProjectData.map((projectDetail, index) => {
            return (
              <div>
                <h1 onClick={() => this.handleProjectUpdate(index)}>{ projectDetail.address }</h1>
              </div>
            ) 
          })}
        </div>
      </div>
    )
  }
}

export default Projects