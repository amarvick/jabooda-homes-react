/* File Name: careerTemplate.js                                             *
 * Description: Template for a career on careers page                       */

import React, { Component } from 'react'

import './careerTemplate.scss'
import AnimateHeight from 'react-animate-height';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import CareerModalApply from './careerModalApply/careerModalApply.js'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
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

class CareerTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrowFATag: 'fa fa-arrow-circle-down fa-2x',
      header: '',
      height: 0,
      openModal: false
    }

    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  toggleDescription() {
    var newTag = (this.state.arrowFATag === 'fa fa-arrow-circle-down fa-2x' ? 'fa fa-arrow-circle-up fa-2x' : 'fa fa-arrow-circle-down fa-2x')
    var height = this.state.height;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
      arrowFATag: newTag
    });
  }

  handleOpenModal(e) {
    e.stopPropagation();
    this.setState({ openModal: true })
  }

  handleCloseModal() {
    this.setState({ openModal: false })
  }

  render(props) {
    const { classes } = this.props;
    var arrowFATag = this.state.arrowFATag
    var description = this.props.description
    var requirements = this.props.requirements
    var height = this.state.height;

    return (
      <Grid className="grid-container" src={this.props.link} item xs={12}>
        <div className="paper-container" onClick={this.toggleDescription}> {/* This will close when clicking on the button; prevent this. */}

          <h1>
            {this.props.header}
          </h1>
          <hr />

          <br />

          <AnimateHeight
            duration={ 500 }
            height={ height }
          >
            <div id="description">
              <p>
                {description} Tasks include:
              </p>
              <div id="requirementsList">
                <ul>
                  {requirements.map(rq => {
                    return (
                      <li>
                        {rq}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <Button variant="contained" onClick={(e) => this.handleOpenModal(e)}>Apply</Button>
            </div>
          </AnimateHeight>

          <span id="arrow" className={arrowFATag} />
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
      </Grid>
    )
  }
}

export default withStyles(styles)(CareerTemplate);