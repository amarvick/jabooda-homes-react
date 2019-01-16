/* File Name: adminLoginModal.js                                            *
 * Description: Application for Jabooda Career                              */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

// Design
import '../../stylesheets/adminLoginModal.scss'
import Modal from '@material-ui/core/Modal'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { validateLogin } from '../actions/adminActions'

class AdminLoginModal extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <div className="adminLoginForm">
                <form onSubmit={(e) => this.props.dispatch(validateLogin(e, this.state))}>
                    <span onClick={this.props.closeAdminLoginModal}
                        id="exitModal"
                        class="fa fa-times-circle fa-2x" />

                    <FormLabel>
                        <span>Email*</span><br />
                        <Input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            autoFocus="true"
                            required />
                    </FormLabel>

                    <br /><br />

                    <FormLabel>
                        <span>Password*</span><br />
                        <Input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            required />
                    </FormLabel>

                    <br /><br />

                    <Button type="submit">Login</Button>
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

export default connect(mapDispatchToProps)(AdminLoginModal)