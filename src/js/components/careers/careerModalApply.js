/* File Name: careerTemplate.js                                       *
 * Description: Displays all open positions                           */

import React, { Component, StartupActions } from 'react'
import axios from 'axios'
import CareerData from '../../../data/careers.json'

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
      handleClose: function(){}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Asynchronous event
  async handleSubmit(e) {
    e.preventDefault();

    // Assign variables
    const { 
      name, 
      email, 
      jobTitle,
      resume,
      summary 
    } = this.state

    alert(resume)

    const form = await axios.post('/api/submitApplication', {
      name, 
      email, 
      jobTitle,
      resume,
      summary 
    }).then(response => {
        if (response.ok) {
          this.props.handleClose()
          
          this.setState({
            // Bind with previous component, get the other modal to pop up
          })
        }
    })
  }

  render(props) {
    var header = 'APPLICATION: ' + this.props.jobTitle

    return (
      <div className={this.props.className + " careerModal"} style={this.props.style}>
        <span onClick={this.props.handleClose} id="exitModal" class="fa fa-times-circle fa-2x" /> <br/>

        <h1>
          {header}
        </h1>

        <form onSubmit = {this.handleSubmit}>
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

export default CareerModalApply