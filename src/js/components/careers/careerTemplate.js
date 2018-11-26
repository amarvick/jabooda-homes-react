/* File Name: careerTemplate.js                                       *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateHeight from 'react-animate-height';
import CareerData from '../../../data/careers.json'

import CareerModalApply from './careerModalApply.js'

import '../../../stylesheets/careerTemplate.scss'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

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
      link: '',
      faClass: '',
      description: '',
      requirements: [],
      arrowFATag: 'fa fa-arrow-circle-down fa-2x',
      header: '',
      height: 0,
      footerText: '',
      openModal: false
    }

    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  toggleDescription() {
    var newTag = (this.state.arrowFATag == 'fa fa-arrow-circle-down fa-2x' ? 'fa fa-arrow-circle-up fa-2x' : 'fa fa-arrow-circle-down fa-2x')
    var height = this.state.height;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
      arrowFATag: newTag
    });
  }

  handleOpenModal() {
    this.setState({ openModal: true })
  }

  handleCloseModal() {
    this.setState({ openModal: false })
  }

  render(props) {
    const { classes } = this.props;
    var showDescription = this.state.showDescription
    var arrowFATag = this.state.arrowFATag
    var description = this.props.description
    var requirements = this.props.requirements
    var height = this.state.height;

    return (
      <Grid src={this.props.link} item xs={12}>
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
                {description}
              </p>
              <div id="requirementsList">
                <ul>
                  {requirements.map(rq => {
                    return (
                      <li>
                        - {rq} {/* AM - Don't use '-' on the side. Go back to CSS and use !important selector*/}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <Button variant="contained" onClick={this.handleOpenModal}>Apply</Button>
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
            handleClose={this.handleCloseModal} />
        </Modal>
      </Grid>
    )
  }
}

export default withStyles(styles)(CareerTemplate);