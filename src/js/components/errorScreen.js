/* File Name: errorScreen.js                                                *
 * Description: Placeholder for errors in loading data                      */

import React, { Component } from 'react'

class ErrorScreen extends Component {
  render(props) {   
    return (
      <p>
        An error loading the data occured. Please check your internet connection and try again. <br/><br/>
        Message: { this.props.error }
      </p>
    )
  }
}

export default ErrorScreen