/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../../stylesheets/userRequests.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import LoadingScreen from '../../loadingScreen'
import ErrorScreen from '../../errorScreen'
import UserRequestsModal from './userRequestsModal'

import { loadData } from '../../../actions/userActions'

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

    componentWillMount() {
        // AM - look in to this later. Getting that annoying error again
        this.props.dispatch(loadData())
    }

    showPendingUsers() {
        this.setState({ displayPendingUsersModal: true })
    }

    closePendingUsers() {
        this.setState({ displayPendingUsersModal: false })
    }

    // Displaying all pending user requests
    render(props) {
        console.log(this.state)
        const { classes } = this.props;
        var pendingRequestCount = 1
        var showPendingUsers
        var areOrIs, singularOrPlural
        var userData = this.props.userData

        for (var i = 0; i < userData.length; i++) {
            if (this.props.userData[i].pending === true) {
                pendingRequestCount++
            }
        }

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
                    There {areOrIs} {pendingRequestCount} new user request{singularOrPlural}. <br/>
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
                        pendingUsers={userData}
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