/* File Name: careerModalApply.js                                           *
 * Description: Application for Jabooda Career                              */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import './careerModalApply.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

// Actions
import { handleSubmit } from '../../actions/careerActions'

// import CareerData from '../../../data/careers.json'

class CareerModalApply extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      jobTitle: '',
      resume: '',
      summary: ''
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
            <span>Name*</span><br/>
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
            <span>Email*</span><br/>
            <Input 
              type="email" 
              name="email"
              onChange={this.handleChange} 
              required />
          </FormLabel>

          <br/><br/>

          <FormLabel>
            <span>Resume (.pdf, .doc)*</span><br/>
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
            <span>Please tell us why you would be a good fit in a few sentences*</span><br/>
            <textarea 
              name="summary"
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


export default connect(mapDispatchToProps)(CareerModalApply)