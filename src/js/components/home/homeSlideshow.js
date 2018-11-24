/* File Name: homeSlideshow.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
import { Slide } from 'react-slideshow-image'

class HomeSlideshow extends Component {
  render(props) {   

    const slideImages = [
        require('../../../images/house1.jpg'),
        require('../../../images/house2.jpg'),
        require('../../../images/house3.jpg'),
    ]
    
    const properties = {
        duration: 5000,
        transitionDuration: 200,
        infinite: true,
        // indicators: true,
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

export default HomeSlideshow