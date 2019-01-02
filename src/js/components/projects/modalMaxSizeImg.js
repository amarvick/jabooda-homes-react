/* File Name: modalMaxSizeImg.js                                            *
 * Description: If user wants to see bigger image of project                */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import '../../../stylesheets/modalMaxSizeImg.scss'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

// Actions
import { seeLeftImage, seeRightImage } from '../../actions/projectActions'

class ModalMaxSizeImg extends Component {

    render(props) {
        console.log(this.props.state)
        var imageSRC = require('../../../images/' + this.props.imageSrc)
        var selectedImageInProject = this.props.selectedImageInProject
        var state = this.props.state

        return (
            <div className="maxSizeImage"
                 style={this.props.style}
                 >

                <span onClick={this.props.handleCloseModal}
                      id="exitModal" 
                      class="fa fa-times-circle fa-2x" /> 
                      
                <br />

                {/* <span id="leftArrow"
                      className="fa fa-chevron-circle-left fa-2x modalMaxArrow"
                      onClick={() => this.props.dispatch(seeLeftImage(selectedImageInProject))} /> */}

                <img height="100%"
                     src={imageSRC} />

                {/* <span id="rightArrow"
                      className="fa fa-chevron-circle-right fa-2x modalMaxArrow"
                      onClick={() => this.props.dispatch(seeRightImage(selectedImageInProject, 0))} /> */}
            </div>
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
    state: state
})

export default connect(mapDispatchToProps, mapStateToProps)(ModalMaxSizeImg)