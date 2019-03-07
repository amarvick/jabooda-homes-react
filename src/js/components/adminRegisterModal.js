/* File Name: adminLoginModal.js                                            *
 * Description: Application for Jabooda Career                              */

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import classnames from 'classnames'

// Design
import './adminRegisterModal.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { registerUser } from "../actions/authActions";

class AdminRegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            errors: {}
        };
    }

    swapLoginModal(e) {
        this.props.closeAdminRegisterModal()
        this.props.openAdminLoginModal()
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin");
        }
    }

    componentWillReceiveProps(nextProps) {
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
            name: this.state.email,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        };

        this.props.registerUser(userData, this.props.history);
    };

    render(props) {

        const { errors } = this.state;

        return (
            <div className="adminLoginForm">
                <form noValidate onSubmit={this.onSubmit}>
                    <span onClick={this.props.closeAdminRegisterModal}
                        id="exitRegisterModal"
                        class="fa fa-times-circle fa-2x" /><br/>

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

                    <span className="red-text">
                        {errors.name}
                        {errors.emailnotfound}
                    </span>

                    <br/><br/>

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

                    <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                    </span>


                    <Button type="submit">Register</Button>

                    <p>Have an admin account? <span onClick={(e) => this.swapLoginModal(e)}>Log in</span></p>

                </form>
            </div>
        )
    }
}

AdminRegisterModal.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(AdminRegisterModal))