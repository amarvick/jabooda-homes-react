/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import '../../../../stylesheets/userRequestsModal.scss'
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

// Actions
import { approveUser, rejectUser } from '../../../actions/userActions'

class UserRequestEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            title: '',
            adminType: '',
            editName: true,
            editEmail: true
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentWillMount() {
        this.setState({
            name: this.props.name,
            email: this.props.email
        })
    }

    // Allow user to edit field. 
    editField(fieldName) {
        if (fieldName === "name") {
            var editNameChange = !this.state.editName
            this.setState({ editName: editNameChange })
        } else if (fieldName === "email") {
            var editEmailChange = !this.state.editEmail
            this.setState({ editEmail: editEmailChange })
        }
    }

    onSubmit() {
        
    }

    render(props) {
        return (
            <li>
                <hr />
                <form>
                    <FormLabel>
                        Name*<br />
                        <input
                            type="text"
                            id="nameField"
                            name="name"
                            disabled={this.state.editName}
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </FormLabel>
                    <span
                        onClick={(name) => this.editField("name")}
                        className="fa fa-pencil fa-lg"
                    /><br />

                    <FormLabel>
                        Email*<br />
                        <input
                            type="email"
                            id="emailField"
                            name="email"
                            disabled={this.state.editEmail}
                            onChange={this.handleChange}
                            value={this.state.email}
                            required
                        />
                    </FormLabel>
                    <span
                        onClick={(email) => this.editField("email")}
                        className="fa fa-pencil fa-lg"
                    /><br />

                    <FormLabel>
                        Title*<br />
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            required />
                    </FormLabel><br />

                    {/* AM - React Material UI needed here*/}
                    <FormLabel>
                        Admin Type*<br />
                        <select
                            name="adminType"
                            onChange={this.handleChange}
                            required>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </FormLabel><br />

                    <Button onClick={this.props.approveUser}>
                        Approve User
                    </Button><br />

                    <Button onClick={this.props.rejectUser}>
                        Reject User
                    </Button>
                </form>
            </li>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup())
})


export default connect(mapDispatchToProps)(UserRequestEntry)