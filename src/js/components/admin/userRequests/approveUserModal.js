/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

import UserRequestEntry from './userRequestEntry'

// Design
import '../../../../stylesheets/approveUserModal.scss'
import Button from '@material-ui/core/Button'

// Actions
import { approveUser } from '../../../actions/userActions'

class ApproveUserModal extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        var userToBeApproved = {
            id: this.props.id,
            name: this.props.name,
            email: this.props.email,
            title: this.props.title,
            adminType: this.props.adminType
        }

        return (
            <div className="approveUserModal" style={this.props.style}>
                <span onClick={this.props.closeUserApproveModal}
                    id="exitModal"
                    className="fa fa-times-circle fa-2x" />

                <p>
                    You are approving {this.props.name}. An email will be sent to {this.props.email}. Please verify this information is correct before approving.
                </p>

                <p>
                    Are you sure you want to proceed? Note that you may remove this user at any time.
                </p>

                <Button onClick={() => this.props.dispatch(approveUser(userToBeApproved))}>
                    Approve User
                </Button><br />

                <Button onClick={this.props.closeUserApproveModal}>
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


export default connect(mapDispatchToProps)(ApproveUserModal)