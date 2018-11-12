/* File Name: paperContainer.js                                              *
 * Description: Container for the project boxes on home page              */

import React, { Component, StartupActions } from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class PaperContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
        link: '',
        faClass: '',
        header: '',
        footerText: ''
    }
  }

  // The question template
  render(props) {    
    return (
        <Grid src={this.props.link} item xs={12} sm={4}>
            <Paper square="false">
                <div class="paper-container">
                    <span class={this.props.faClass}/>

                    <h1>
                    {this.props.header}
                    </h1>
                    <hr/>
                    
                    <p class="footerText">
                        {this.props.footerText}
                    </p>
                </div>
            </Paper>
        </Grid>
    )
  }
}

export default PaperContainer