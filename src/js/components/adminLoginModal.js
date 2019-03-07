/* File Name: adminLoginModal.js                                            *
 * Description: Application for Jabooda Career                              */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import classnames from 'classnames'

// Design
import './adminLoginModal.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { loginUser } from "../actions/authActions";
import { resetPassword } from '../actions/userActions'

class AdminLoginModal extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    resetPassword = e => {
        e.preventDefault()

        var email = prompt("Please enter your email")
        this.props.resetPassword(email)
    }

    swapRegisterModal(e) {
        this.props.closeAdminLoginModal()
        this.props.openAdminRegisterModal()
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            console.log(this.props)
            this.props.history.push("/admin");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="adminLoginForm">
                <form noValidate onSubmit={this.onSubmit}>
                    <span onClick={this.props.closeAdminLoginModal}
                        id="exitModal"
                        class="fa fa-times-circle fa-2x" />

                    <FormLabel>
                        <span>Email*</span><br />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={this.onChange}
                            value={this.state.email}
                            autoFocus="true"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                            required />
                    </FormLabel>

                    <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                    </span>

                    <br/><br/>

                    <FormLabel>
                        <span>Password*</span><br />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                            required />
                    </FormLabel>

                    <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                    </span>

                    <br/><br/>

                    <Button type="submit">
                        Login
                    </Button>
                    <Button onClick={(e) => this.resetPassword(e)}>
                        Forgot password?
                    </Button>
                    <p>Not signed up as an admin? <span onClick={(e) => this.swapRegisterModal(e)}>Register</span></p>

                </form>
            </div>
        )
    }
}

AdminLoginModal.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser, resetPassword })(withRouter(AdminLoginModal))