/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
// import '../../../../stylesheets/userRequestsModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

class ChangePassModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }

    render(props) {
        return (
            <div className="allPendingUsers" style={this.props.style}>
                <form noValidate onSubmit={this.onSubmit}>
                    <span onClick={this.props.closeChangePasswordModal}
                        id="exitModal"
                        class="fa fa-times-circle fa-2x" />

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

                    <Button type="submit">Login</Button>
                    <p>Not signed up as an admin? <span onClick={(e) => this.swapRegisterModal(e)}>Register</span></p>

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