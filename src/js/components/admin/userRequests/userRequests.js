/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import './userRequests.scss'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import UserRequestsModal from './userRequestsModal'

function getModalStyle() {
    // const top = 50
    // const left = 50

    // return {
    //     top: `${top}%`,
    //     left: `${left}%`,
    //     transform: `translate(-${top}%, -${left}%)`,
    // };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class UserRequests extends Component {
    constructor() {
        super()

        this.state = {
            displayPendingUsersModal: false
        }

        this.showPendingUsers = this.showPendingUsers.bind(this)
        this.closePendingUsers = this.closePendingUsers.bind(this)
    }


    showPendingUsers() {
        this.setState({ displayPendingUsersModal: true })
    }

    closePendingUsers() {
        this.setState({ displayPendingUsersModal: false })
    }

    // Displaying all pending user requests
    render(props) {
        const { classes } = this.props
        var showPendingUsers, areOrIs, singularOrPlural
        var theUserData = this.props.theUserData
        var pendingRequestCount = this.props.userDataCount

        if (pendingRequestCount === 1) {
            areOrIs = 'is'
            singularOrPlural = ''
        } else {
            areOrIs = 'are'
            singularOrPlural = 's'
        }

        if (pendingRequestCount > 0) {
            showPendingUsers = (
                <Button onClick={this.showPendingUsers}>
                    Show all pending users
                </Button>
            )
        }

        return (
            <div>
                <p>
                    There {areOrIs} {pendingRequestCount} new user request{singularOrPlural}. <br />
                    {showPendingUsers}
                </p>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.displayPendingUsersModal}
                    onClose={this.closePendingUsers}
                    disableBackdropClick={true}
                >
                    <UserRequestsModal
                        style={getModalStyle()}
                        pendingUsers={theUserData}
                        jobTitle={this.props.header}
                        closePendingUsers={this.closePendingUsers} />
                </Modal>
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
    state: state,
    error: state.user.error,
    loading: state.user.loading,
    userData: state.user.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRequests);