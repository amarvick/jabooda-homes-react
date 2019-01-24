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

class UserRequestsModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            title: '',
            adminType: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }    

    render(props) {
        var userData = [{"name":"Alex", "email": "anarvick95@eemail.com"}]

        return (
            <div className="allPendingUsers" style={this.props.style}>
                <span onClick={this.props.closePendingUsers}
                    id="exitModal"
                    className="fa fa-times-circle fa-2x" />

                Here are all the pending users

                <ul>
                    {userData.map(ud => {
                        return (
                            <li>
                                <hr/>
                                <form>
                                    <FormLabel>
                                        Name*<br/>
                                        <input
                                            type="text"
                                            name="name"
                                            disabled="true"
                                            onChange={this.handleChange}
                                            value={ud.name}
                                            required
                                        />
                                    </FormLabel>
                                    <span 
                                        onClick={console.log('Editing')}
                                        className="fa fa-pencil fa-lg"
                                    /><br/>

                                    <FormLabel>
                                        Email*<br/>
                                        <input
                                            type="email"
                                            name="email"
                                            disabled="true"
                                            onChange={this.handleChange}
                                            value={ud.email}
                                            required
                                        />
                                    </FormLabel>
                                    <span 
                                        onClick={console.log('Editing')}
                                        className="fa fa-pencil fa-lg"
                                    /><br/>
                                    
                                    <FormLabel>
                                        Title*<br/>
                                        <input 
                                            type="text" 
                                            name="title"
                                            onChange={this.handleChange}
                                            required/> 
                                    </FormLabel><br/>

                                    {/* AM - React Material UI needed here*/}
                                    <FormLabel>
                                        Admin Type*<br/>
                                        <select
                                            name="adminType"
                                            onChange={this.handleChange}
                                            required>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </FormLabel><br/>

                                    <Button onClick={this.props.approveUser}>
                                        Approve User
                                    </Button><br/>

                                    <Button onClick={this.props.rejectUser}>
                                        Reject User
                                    </Button>
                                </form>
                            </li>
                        )
                    })}
                </ul>
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


export default connect(mapDispatchToProps)(UserRequestsModal)