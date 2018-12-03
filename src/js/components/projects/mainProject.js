/* File Name: mainProject.js                                        *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import ProjectData from '../../../data/projects.json'

// AM - Make sure to update this with the new modal. Here to verify this works
import CareerModalApply from '../careers/careerModalApply.js'

class MainProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // AM - will make sure this is in redux
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

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openModal}
          onClose={this.handleCloseModal}
          disableBackdropClick={true}
        >
          <CareerModalApply
            style={getModalStyle()}
            className={classes.paper}
            jobTitle={this.props.header}
            handleCloseModal={this.handleCloseModal} />
        </Modal>
      </div>
    )
  }
}

export default MainProject