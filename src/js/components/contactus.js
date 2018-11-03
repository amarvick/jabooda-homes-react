/* File Name: contactus.js                                              *
 * Description: Contact jabooda homes                                   */

import React, { Component, StartupActions } from 'react'

// Design
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {    
    return (
      <div className = 'contactUsComponent'>
        <h1>Contact Us</h1>
       
        <form>
          <FormLabel>
            Name <br/>
            <Input type="text" name="name" autoFocus="true" required />
          </FormLabel>

          {/* AM - do this in CSS way */}
          <br/><br/>

          <FormLabel>
            Email <br/>
            <Input type="email" name="email" required />
          </FormLabel>

          <br/><br/>

          <FormLabel>
            Message <br/>
            <textarea rows="20" cols="80" required />
          </FormLabel>
          
          <br/><br/>

          <Input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default Contactus