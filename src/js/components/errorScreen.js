/* File Name: loadingScreen.js                                              *
 * Description: Placeholder for loading data                                */

import React, { Component, StartupActions } from 'react'

class ErrorScreen extends Component {
  render(props) {   
    let style = {
      fontSize: 100
    }  

    let textStyle = {
        fontSize: 30
    }
    
    return (
      <div>
          <p>
            { this.props.error }
          </p>
      </div>
    )
  }
}

export default ErrorScreen