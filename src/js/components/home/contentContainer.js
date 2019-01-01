/* File Name: contentContainer.js                                              *
 * Description: Container for the content on home page              */

import React, { Component, StartupActions } from 'react'
import { NavLink, Link } from 'react-router-dom';

// Design
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

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
            <Link to={this.props.link}>
                <Button variant="contained">
                    View Openings
                </Button>
            </Link>
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
        <Hidden xsDown>
            <Grid item xs={12} sm={4}>
                <img src={this.props.imageUrl} />
            </Grid>
        </Hidden>
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