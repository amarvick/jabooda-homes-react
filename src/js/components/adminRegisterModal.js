/* File Name: adminLoginModal.js                                            *
 * Description: Application for Jabooda Career                              */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import classnames from 'classnames'

// Design
import '../../stylesheets/adminLoginModal.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { loginUser } from "../actions/authActions";

class AdminLoginModal extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            errors: {}
        };
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
                        <span>Name*</span><br />
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.onChange}
                            value={this.state.name}
                            autoFocus="true"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                            required />
                    </FormLabel>

                    <label htmlFor="name">Name</label>
                    <span className="red-text">
                        {errors.name}
                        {errors.emailnotfound}
                    </span>

                    <FormLabel>
                        <span>Email*</span><br />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={this.onChange}
                            value={this.state.email}
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                            required />
                    </FormLabel>

                    <label htmlFor="email">Email</label>
                    <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                    </span>

                    <br /><br />

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

                    <label htmlFor="password">Password</label>
                    <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                    </span>

                    <br /><br />

                    <FormLabel>
                        <span>Confirm Password*</span><br />
                        <Input
                            type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            value={this.state.passwordConfirm}
                            onChange={this.onChange}
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                            required />
                    </FormLabel>

                    <label htmlFor="password">Confirm Password</label>
                    <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                    </span>


                    <Button type="submit">Login</Button>
                </form>
            </div>
        )
    }
}

// // wraps dispatch to create nicer functions to call within our component
// // Mapping dispatch actions to the props
// const mapDispatchToProps = (dispatch) => ({
//     dispatch: dispatch,
//     startup: () => dispatch(StartupActions.startup())
// })

AdminLoginModal.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(AdminLoginModal))