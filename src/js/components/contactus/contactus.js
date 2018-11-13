/* File Name: contactus.js                                              *
 * Description: Contact jabooda homes                                   */

import React, { Component, StartupActions } from 'react'
import axios from 'axios'

import PageBanner from '../pageBanner'

// Design
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class Contactus extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Asynchronous event
  async handleSubmit(event) {
    event.preventDefault();

    // Assign variables
    const { 
      name, 
      email, 
      message 
    } = this.state

    // AM - look in to 'await' function. Assuming it has to do with asynchronization?
    const form = await axios.post('/api/sendEmailform', {
      name, 
      email,
      message
    })
  }

  render() {    
    return (
      <div>
        <PageBanner
          header="CONTACT US"
          image="house4.jpg"
        />

        <div className="pageContent contactUsComponent">
          <p>* = Required</p><br/><br/>
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
              Message*<br/>
              <textarea 
                name="message"
                rows="20" 
                cols="80"
                onChange={this.handleChange} 
                required />
            </FormLabel>
            
            <br/><br/>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contactus