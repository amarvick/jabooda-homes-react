/* File Name: mainProject.js                                        *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

// AM - Make sure to update this with the new modal. Here to verify this works
import ModalMaxSizeImg from './modalMaxSizeImg'

import { withStyles } from '@material-ui/core/styles';

function getModalStyle() {
  // const top = 10
  // const left = 5

  // return {
  //   top: `${top}%`,
  //   left: `${left}%`,
  //   transform: `translate(-${top}%, -${left}%)`,
  // };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class MainProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // AM - will make sure this is in redux
      selectedImageInProject: 0,
      openModal: false
    }

    this.updateImage = this.updateImage.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedProject != this.props.selectedProject) {
        this.setState({ selectedImageInProject: 0 })
    }
  }

  updateImage(index) {
      this.setState({ selectedImageInProject: index })
  }

  handleOpenModal() {
    this.setState({ openModal: true })
  }

  handleCloseModal() {
    this.setState({ openModal: false })
  }


  render(props) {
    const { classes } = this.props;
    var selectedProject = this.props.selectedProject

    // AM - Do this via Redux
    var image
    try {
        image = require("../../../images/" + selectedProject.images[this.state.selectedImageInProject])
    } catch (e) {
        image = require("../../../images/" + selectedProject.images[0])
    }

    return (
      <div className = 'projectsComponent'>
        <div>
          <h2>{selectedProject.address}</h2>
          <img onClick={() => this.handleOpenModal()} height="500" src={image}/>
            
          <ul>
            {selectedProject.images.map((img, index) => {
              return (
                <li>
                  <img 
                    onClick={() => this.updateImage(index)}
                    height="100" 
                    width="100"
                    src={require("../../../images/" + img)}/>
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
          <ModalMaxSizeImg
            style={getModalStyle()}
            className={classes.paper}
            jobTitle={this.props.header}
            imageSrc={selectedProject.images[this.state.selectedImageInProject]}
            handleCloseModal={this.handleCloseModal} />
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(MainProject)