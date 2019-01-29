/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import UserRequestEntry from './userRequestEntry'

// Design
import '../../../../stylesheets/userRequestsModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

// Actions
import { approveUser, rejectUser } from '../../../actions/userActions'

class UserRequestsModal extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        var pendingUsers = this.props.pendingUsers
        return (
            <div className="allPendingUsers" style={this.props.style}>
                <span onClick={this.props.closePendingUsers}
                    id="exitModal"
                    className="fa fa-times-circle fa-2x" />

                Here are all the pending users

                <ul id="userRequestEntries">
                    {pendingUsers.map(ud => {
                        return (
                            <UserRequestEntry
                                id={ud._id}
                                name={ud.name}
                                email={ud.email}
                            />
                        )
                    })}
                </ul>
                        
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