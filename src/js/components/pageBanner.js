/* File Name: pageBanner.js                                                 *
 * Description: Page banner for pages on the website                        */

import React, { Component } from 'react'

import './pageBanner.scss'

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
            <img alt="Header" src={require('../../images/' + this.props.image)} />
        </div>
    )
  }
}

export default PageBanner