/* File Name: mainProject.js                                        *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import ProjectData from '../../../data/projects.json'


class MainProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedImageInProject: 0
    }

    this.updateImage = this.updateImage.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedProject != this.props.selectedProject) {
        this.setState({ selectedImageInProject: 0 })
    }
  }

  updateImage(index) {
      this.setState({ selectedImageInProject: index })
  }

  render(props) {
    var selectedProject = this.props.selectedProject

    // AM - Do this via Redux
    var image
    try {
        image = require("../../../images/" + selectedProject.images[this.state.selectedImageInProject])
    } catch (e) {
        image = require("../../../images/" + selectedProject.images[this.state.selectedImageInProject])
    }

    return (
      <div className = 'projectsComponent'>
        <div>
          <h2>{selectedProject.address}</h2>
          <img height="500" src={image}/>
            
          <ul>
            {selectedProject.images.map((image, index) => {
              return (
                <li>
                  <img 
                    onClick={() => this.updateImage(index)}
                    height="100" 
                    width="100"
                    src={require("../../../images/" + image)}/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainProject