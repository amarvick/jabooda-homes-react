/* File Name: contentContainer.js                                              *
 * Description: Container for the content on home page              */

import React, { Component, StartupActions } from 'react'

// Design
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ContentContainer extends Component {
  constructor(props) {
    super(props)
  }

  // The question template
  render(props) { 
    var button = this.props.button || null
    var buttonView

    if (button != null) {
        buttonView = (
            <Button variant="contained" href={this.props.link}>
                View Openings
            </Button>
        )  
    }
    
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

                { buttonView }
            </div>
        </Grid>
    )

    var theImage = (
        <Grid item xs={0} sm={4}>
            <img src={this.props.imageUrl} />
        </Grid>
    )
    
    return (
        <Grid className="contentClass" container spacing={24}>
            { textSection }
            { theImage }
        </Grid>
    )
  }
}

export default ContentContainer