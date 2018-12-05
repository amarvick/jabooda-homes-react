/* File Name: modalMaxSizeImg.js                                      *
 * Description: If user wants to see bigger image of project          */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import '../../../stylesheets/modalMaxSizeImg.scss'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

class ModalMaxSizeImg extends Component {
  leftKeyPress(e) {
      if(e.keyCode === 37) {
        alert('Left Key Press detected')
      } else {
          alert('Not left key!')
      }
  }

  render(props) {

    var imageSRC = require('../../../images/' + this.props.imageSrc)
    // var fakeImageSRC = require('../../../images/13979se1st/Photo-28.jpg')

    return (
      <div 
        className="maxSizeImage" 
        style={this.props.style}
        onKeyDown={(e) => this.leftKeyPress(e)}>
        <span onClick={this.props.handleCloseModal} id="exitModal" class="fa fa-times-circle fa-2x" /> <br/>
        
        <span 
            id="leftArrow" 
            className="fa fa-chevron-circle-left fa-2x modalMaxArrow"
            onClick={this.props.seeLeftImage} /> 

        <img height="600" src={imageSRC}/>

        <span 
            id="rightArrow" 
            className="fa fa-chevron-circle-right fa-2x modalMaxArrow"
            onClick={this.props.seeRightImage} /> 
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

export default connect(mapDispatchToProps)(ModalMaxSizeImg)