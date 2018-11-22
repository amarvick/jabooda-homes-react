/* File Name: careerTemplate.js                                       *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
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
      showDescription: false,
      arrowFATag: 'fa fa-arrow-circle-down fa-2x',
      header: '',
      footerText: '',
      open: false
    }

    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  toggleDescription() {
    var showDescription = !this.state.showDescription;
    var newTag = (this.state.arrowFATag == 'fa fa-arrow-circle-down fa-2x' ? 'fa fa-arrow-circle-up fa-2x' : 'fa fa-arrow-circle-down fa-2x')

    this.setState({
      showDescription: showDescription,
      arrowFATag: newTag
    })
  }

  handleOpen() {
    this.setState({ open: true })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render(props) {
    const { classes } = this.props;
    var showDescription = this.state.showDescription
    var arrowFATag = this.state.arrowFATag
    var description = this.props.description
    var requirements = this.props.requirements

    var descriptionDisplay;

    if (showDescription) {
      descriptionDisplay = (
        <div id="description">
          <p>
            {description}
          </p>
          <div id="requirementsList">
            <ul>
              {requirements.map(rq => {
                return (
                  <li>
                    - {rq}
                  </li>
                )
              })}
            </ul>
          </div>
          <Button variant="contained" onClick={this.handleOpen}>Apply</Button>
        </div>
      )
    }

    return (
      <Grid src={this.props.link} item xs={12}>
        <div class="paper-container">

          <h1>
            {this.props.header}
          </h1>
          <hr />

          <br />

          {descriptionDisplay}
          <span id="arrow" onClick={this.toggleDescription} className={arrowFATag} />

        </div>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          disableBackdropClick={true}
        >
          <CareerModalApply
            style={getModalStyle()}
            className={classes.paper}
            jobTitle={this.props.header}
            handleClose={this.handleClose} />
        </Modal>
      </Grid>
    )
  }
}

export default withStyles(styles)(CareerTemplate);