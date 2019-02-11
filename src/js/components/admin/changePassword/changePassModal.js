/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import './changePassModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

import { updatePassword } from '../../../actions/userActions'

class ChangePassModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
            // errors: ''
        }
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.state.newPassword === this.state.confirmPassword) {
            const userData = {
                id: this.props.id,
                password: this.state.newPassword
            }

            this.props.dispatch(updatePassword(userData))
        } else {
            alert('New Passwords do not match')
        }
    }

    generateUserCredentialsForUpdate(state) {
        var newUser = {
            ...state,
            _id: this.props.userId
        }
        console.log(newUser)
        this.props.dispatch(updatePassword(newUser))
    }

    render(props) {
        return (
            <div className="formOne" id="changePassModal" style={this.props.style}>
                <form noValidate onSubmit={this.onSubmit}>
                    <span onClick={this.props.closeChangePasswordModal}
                        id="exitChangePassModal"
                        class="fa fa-times-circle fa-2x" />
                    <br/>

                    <FormLabel>
                        <span>Old Password*</span><br />
                        <Input
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            onChange={this.handleChange}
                            value={this.state.oldPassword}
                            autoFocus="true"
                            required />
                    </FormLabel>

                    <br/><br/>

                    <FormLabel>
                        <span>New Password*</span><br />
                        <Input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            onChange={this.handleChange}
                            value={this.state.newPassword}
                            required />
                    </FormLabel>

                    <br/><br/>

                    <FormLabel>
                        <span>Confirm New Password*</span><br />
                        <Input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={this.handleChange}
                            value={this.state.confirmPassword}
                            required />
                    </FormLabel>

                    <br/><br/>

                    <Button type="submit">Update Password</Button>
                </form>
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
    error: state.career.error,
    loading: state.career.loading,
    loggedIn: state.auth.isAuthenticated,
    userId: state.auth.user.id
  })


export default connect(mapStateToProps, mapDispatchToProps)(ChangePassModal)