/* File Name: homeSlideshow.js                                              *
 * Description: Slideshow on home page                                      */

import React, { Component } from 'react'
import { Fade } from 'react-slideshow-image'

class HomeSlideshow extends Component {
  render(props) {   

    const slideImages = [
        require('../../../images/homebanner.jpg'),
        require('../../../images/13979se1st/Photo-9.jpg'),
        require('../../../images/13979se1st/Photo-16.jpg'),
    ]
    
    const properties = {
        duration: 5000,
        transitionDuration: 400,
        infinite: true,
        indicators: false,
        arrows: false
    }  
    
    return (
      <div className = 'homeSlideshowComponent'>
        <Fade {...properties}>
          <div className="each-slide">
            <img alt="Slideshow Home 1" src={slideImages[0]}/>
          </div>
          <div className="each-slide">
            <img alt="Slideshow Home 2" src={slideImages[1]}/>
          </div>
          <div className="each-slide">
            <img alt="Slideshow Home 3" src={slideImages[2]}/>
          </div>
        </Fade>
      </div>
    )
  }
}

export default HomeSlideshow