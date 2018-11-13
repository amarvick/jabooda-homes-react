/* File Name: contentContainer.js                                              *
 * Description: Container for the content on home page              */

import React, { Component, StartupActions } from 'react'

// Design
import Grid from '@material-ui/core/Grid';

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
    
    var textSection = (
        <Grid item xs={12} sm={8}>
            <div className="Container">
                <h1>{this.props.header}</h1>
                <hr/>
                <p>
                    {this.props.paragraph1}
                </p>
                <p>
                    {this.props.paragraph2}
                </p>
            </div>
        </Grid>
    )

    var theImage = (
        <Grid item xs={0} sm={4}>
            <img src={this.props.imageUrl} />
        </Grid>
    )
    
    return (
        <Grid container spacing={24}>
            { textSection }
            { theImage }
        </Grid>
    )
  }
}

export default ContentContainer