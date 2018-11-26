/* File Name: careerTemplate.js                                       *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import CareerData from '../../../data/careers.json'

// // Actions
import { handleSubmit } from '../../actions/careerActions'

// Design
import '../../../stylesheets/careerModalApply.scss'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class CareerModalApply extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      jobTitle: '',
      resume: '',
      summary: '', 
      style: '',
      className: '',
      handleCloseModal: function(){}
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(props) {
    var header = 'APPLICATION: ' + this.props.jobTitle

    return (
      <div className={this.props.className + " careerModal"} style={this.props.style}>
        <span onClick={this.props.handleCloseModal} id="exitModal" class="fa fa-times-circle fa-2x" /> <br/>

        <h1>
          {header}
        </h1>

        <form onSubmit = {(e) => this.props.dispatch(handleSubmit(e, this.state))}>
          <FormLabel>
            Name*<br/>
            <Input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              autoFocus="true" 
              required />
          </FormLabel>

            {/* AM - do this in CSS way */}
          <br/><br/>

          <FormLabel>
            Email*<br/>
            <Input 
              type="email" 
              name="email"
              onChange={this.handleChange} 
              required />
          </FormLabel>

          <br/><br/>

          <FormLabel>
            Resume (.pdf, .doc)*<br/>
            <Input
              type="file" 
              name="resume" 
              onChange={this.handleChange} 
              id="file-id"
              required
            //   accept="pdf/*"
              />
          </FormLabel> 

          <br/><br/>

          <FormLabel>
            Please tell us why you would be a good fit in a few sentences*<br/>
            <textarea 
              name="summary"
              rows="20" 
              cols="80"
              reize="none"
              onChange={this.handleChange} 
              required />
          </FormLabel>
            
          <br/><br/>
          <Button type="submit">Apply</Button>
        </form>
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
  faClass: state.faClass,
  description: state.description,
  requirements: state.requirements,
  arrowFATag: state.arrowFATag,
  header: state.header,
  height: state.height,
  footerText: state.footerText,
  openAppModal: state.openAppModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(CareerModalApply)