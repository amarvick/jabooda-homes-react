/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

import ApproveUserModal from './approveUser/approveUserModal'
import RejectUserModal from './rejectUser/rejectUserModal'

// Design
import './userRequestEntry.scss'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

class UserRequestEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            title: '',
            adminType: '',
            editName: true,
            editEmail: true,
            approveUserModalOpen: false,
            rejectUserModalOpen: false
        }

        this.openUserApproveModal = this.openUserApproveModal.bind(this);
        this.closeUserApproveModal = this.closeUserApproveModal.bind(this);
        this.openUserRejectModal = this.openUserRejectModal.bind(this);
        this.closeUserRejectModal = this.closeUserRejectModal.bind(this);
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

    openUserApproveModal() {
        this.setState({ approveUserModalOpen: true })
    }

    closeUserApproveModal() {
        this.setState({ approveUserModalOpen: false })        
    }

    openUserRejectModal() {
        this.setState({ rejectUserModalOpen: true })
    }

    closeUserRejectModal() {
        this.setState({ rejectUserModalOpen: false })  
    }

    render(props) {
        console.log(this.props)
        return (
            <div id="userRequestForm">
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
                            onChange={(e) => this.handleChange(e)}
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
                            onChange={(e) => this.handleChange(e)}
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
                            onChange={(e) => this.handleChange(e)}
                            required />
                    </FormLabel><br />

                    <FormLabel>
                        Admin Type*<br />
                        <select
                            name="adminType"
                            onChange={(e) => this.handleChange(e)}
                            required>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </FormLabel><br />

                    <Button onClick={this.openUserApproveModal}>
                        Approve User
                    </Button><br />

                    <Button onClick={this.openUserRejectModal}>
                        Reject User
                    </Button>
                </form>

                
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.approveUserModalOpen}
                    onClose={this.closeUserApproveModal}
                    disableBackdropClick={true}
                >
                    <ApproveUserModal
                        id={this.props.id}
                        name={this.state.name}
                        email={this.state.email}
                        title={this.state.title}
                        adminType={this.state.adminType}
                        closeUserApproveModal={this.closeUserApproveModal} />
                </Modal>

                
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.rejectUserModalOpen}
                    onClose={this.closeUserRejectModal}
                    disableBackdropClick={true}
                >
                    <RejectUserModal
                        id={this.props.id}
                        name={this.state.name}
                        email={this.state.email}
                        closeUserRejectModal={this.closeUserRejectModal} />
                </Modal>
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


export default connect(mapDispatchToProps)(UserRequestEntry)