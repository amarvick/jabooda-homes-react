/* File Name: home.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import { Slide } from 'react-slideshow-image'
// import { connect } from 'react-redux'

import HomeSlideshow from './homeSlideshow'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // The question template
  render(props) {    
    return (
      <div className = 'homeComponent'>
        <HomeSlideshow/>
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
export default Home