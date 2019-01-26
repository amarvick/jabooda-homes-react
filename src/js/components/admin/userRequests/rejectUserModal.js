/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

import UserRequestEntry from './userRequestEntry'

// Design
import '../../../../stylesheets/rejectUserModal.scss'
import Button from '@material-ui/core/Button'

// Actions
import { approveUser, rejectUser } from '../../../actions/userActions'

class RejectUserModal extends Component {
    constructor(props) {
        super(props)

    }

    render(props) {
        
        return (
            <div className="rejectUserModal" style={this.props.style}>
                <span onClick={this.props.closeUserRejectModal}
                    id="exitModal"
                    className="fa fa-times-circle fa-2x" />

                <p>
                    You are rejecting {this.props.name}. An email will be sent to {this.props.email} to notify. Please verify this information is correct.
                </p>

                <p>
                    Are you sure you want to proceed?
                </p>

                <Button onClick={this.props.rejectUser}>
                    Reject {this.props.name}
                </Button><br />

                <Button onClick={this.props.closeUserRejectModal}>
                    Go Back
                </Button>

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


export default connect(mapDispatchToProps)(RejectUserModal)