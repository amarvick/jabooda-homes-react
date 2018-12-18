/* File Name: paperContainer.js                                              *
 * Description: Container for the project boxes on home page              */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import { loadData, handleProjectUpdate, updateTab } from '../../actions/projectActions'

import '../../../stylesheets/paperContainer.scss'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class PaperContainer extends Component {
    render(props) {    
        var tab = this.props.tab

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
                            {this.props.footerText} <br/><br/>

                            <Button onClick={() => this.props.dispatch(updateTab(tab))} href="./Projects">View</Button>
                        </p>
                    </div>
                </Paper>
            </Grid>
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
    state: state,
    projectData: state.project.projectData,
    projectsToDisplay: state.project.projectsToDisplay,
    selectedProject: state.project.selectedProject,
    selectedImageInProject: state.project.selectedImageInProject
})

export default connect(mapStateToProps, mapDispatchToProps)(PaperContainer);
// export default PaperContainer