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
            confirmPassword: '',
            errors: ''
        }
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.state.newPassword === this.state.confirmPassword) {

            const userData = {
                id: this.props.id,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
                confirmPassword: this.state.confirmPassword
            }

            this.props.updatePassword(userData)
        } else {
            alert('New Passwords do not match')
        }
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
                            onChange={this.onChange}
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
                            onChange={this.onChange}
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
                            onChange={this.onChange}
                            value={this.state.confirmPassword}
                            required />
                    </FormLabel>

                    <br/><br/>

                    <Button type="submit" onClick={this.updatePassword}>Update Password</Button>
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


export default connect(mapDispatchToProps)(ChangePassModal)