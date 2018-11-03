/* File Name: homeSlideshow.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import { Slide } from 'react-slideshow-image'
// import { connect } from 'react-redux'



class HomeSlideshow extends Component {
  render(props) {   
    // Return - these images are not rendering properly 
    const slideImages = [
        '../images/house1.jpg',
        '../../images/house2.jpg',
        '../../images/house3.jpg',
    ]
    
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }  
    
    return (
      <div className = 'homeSlideshowComponent'>
        <Slide {...properties}>
          <div className="each-slide">
            <img src={slideImages[0]}/>
          </div>
          <div className="each-slide">
            <img src={slideImages[1]}/>
          </div>
          <div className="each-slide">
            <img src={slideImages[2]}/>
          </div>
        </Slide>
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
export default HomeSlideshow