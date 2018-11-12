/* File Name: contentContainer.js                                              *
 * Description: Container for the content on home page              */

import React, { Component, StartupActions } from 'react'

class ContentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
        header: '',
        paragrpah1: '',
        paragraph2: '',
        imageUrl: ''
    }
  }

  // The question template
  render(props) { 
    // if (this.props.imageUrl != '') {
    //     var theImage = (
    //         <img src={require(this.props.imageUrl)}/>
    //     )
    // }
    
    return (
        <div className="Container">
            <h1>{this.props.header}</h1>
            <hr/>
            <p>
                {this.props.paragraph1}
            </p>
            <p>
                {this.props.paragraph2}
            </p>
            {/* { theImage } */}
        </div>
    )
  }
}

export default ContentContainer