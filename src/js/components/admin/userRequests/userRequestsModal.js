/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import '../../../stylesheets/userRequestsModal.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

// Actions
import { approveUser, disapproveUser } from '../../actions/userActions'

class UserRequestsModal extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(props) {
    return (
      <div className={"allPendingUsers"} style={this.props.style}>
        Here are all the pending users
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


export default connect(mapDispatchToProps)(UserRequestsModal)