/* File Name: mainProject.js                                        *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

// AM - Make sure to update this with the new modal. Here to verify this works
import ModalMaxSizeImg from './modalMaxSizeImg'

import { withStyles } from '@material-ui/core/styles';

import { updateImage } from '../../actions/projectActions'

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
      openModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ openModal: true })
  }

  handleCloseModal() {
    this.setState({ openModal: false })
  }

  keyPressShiftImage(e) {
    if (e.keyCode === 37) {
      alert('Left Key Press detected')
    } else if (e.keyCode == 39) {
      alert('Right Key Press detected')
    }
  }

  render(props) {
    const { classes } = this.props;
    var selectedProject = this.props.selectedProject
    var selectedImageInProject = this.props.selectedImageInProject

    // AM - Do this via Redux
    var image
    try {
      image = require("../../../images/" + selectedProject.images[selectedImageInProject])
    } catch (e) {
      image = require("../../../images/" + selectedProject.images[0])
    }

    return (
      <div className='projectsComponent'>
        <div onKeyDown={(e) => this.keyPressShiftImage(e)}>
          <h2>{selectedProject.address}</h2>
          <img onClick={() => this.handleOpenModal()} height="500" src={image} />

          <ul>
            {selectedProject.images.map((img, index) => {
              return (
                <li>
                  <img
                    onClick={() => this.props.dispatch(updateImage(index))}
                    height="100"
                    width="100"
                    src={require("../../../images/" + img)} />
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
            imageSrc={selectedProject.images[selectedImageInProject]}
            handleCloseModal={this.handleCloseModal} />
        </Modal>
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
  selectedImageInProject: state.project.selectedImageInProject
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainProject))