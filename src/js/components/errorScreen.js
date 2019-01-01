/* File Name: errorScreen.js                                              *
 * Description: Placeholder for errors in loading data                    */

import React, { Component } from 'react'

class ErrorScreen extends Component {
  render(props) {   
    return (
      <p>
        { this.props.error }
      </p>
    )
  }
}

export default ErrorScreen