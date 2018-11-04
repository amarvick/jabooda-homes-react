/* File Name: projects.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import ProjectData from '../../data/projects.json'


class Projects extends Component {
  constructor() {
    super()

    this.state = {
      selectedProject: 0,
      selectedImageInProject: 0
    }
  }

  // The question template
  render() {
    const baseUrl = "../../images/"

    return (
      <div className = 'projectsComponent'>
        {ProjectData.map(projectDetail => {
          return (
            <div>
              <h2>{projectDetail.address}</h2>
              <img src={require(baseUrl + projectDetail.images[this.state.selectedImageInProject])}/>
              
              <ul>
                {projectDetail.images.map(image => {
                  return (<li><img src={require(image)}/></li>)
                })}
              </ul>
            </div>
          )
        })}
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
})

// export default connect(mapStateToProps, mapDispatchToProps)(Error)
export default Projects