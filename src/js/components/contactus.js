/* File Name: contactus.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux'


class Contactus extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // The question template
  render(props) {    
    return (
      <div className = 'contactUsComponent'>
        
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
})

// export default connect(mapStateToProps, mapDispatchToProps)(Error)
export default Contactus