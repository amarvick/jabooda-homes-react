/* File Name: paperContainer.js                                              *
 * Description: Container for the project boxes on home page              */

import React, { Component, StartupActions } from 'react'

import '../../stylesheets/pageBanner.scss'

class PageBanner extends Component {
  constructor(props) {
    super(props)

    this.state = {
        header: '',
        image: ''
    }
  }

  // The question template
  render(props) {    
    return (
        <div className="pageBannerContainer">
            <h1>
                { this.props.header }
            </h1>
            <img src={require('../../images/' + this.props.image)} />
        </div>
    )
  }
}

export default PageBanner