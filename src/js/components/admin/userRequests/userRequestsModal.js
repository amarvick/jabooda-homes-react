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
    }

    render(props) {
        var userData = this.props.userData || []

        return (
            <div className={"allPendingUsers"} style={this.props.style}>
                <span onClick={this.props.closePendingUsers}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />

                Here are all the pending users

                <ul>
                    {userData.map(ud => {
                        return (
                            <li>
                                <form>
                                <h2>{ud.name}</h2> <br/>
                                <p>{ud.email}</p> <br/>
                                Title: <input type="text" /> <br/>

                                {/* AM - React Material UI needed here*/}
                                Admin Type: <select>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>

                                    <Button onClick={this.props.approveUser()}>
                                        Approve User
                                    </Button>

                                    <Button onClick={this.props.rejectUser()}>
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