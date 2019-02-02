/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
// import DOMPurify from 'dompurify' AM - remember to uninstall

// Design
import '../../../../stylesheets/dataEditModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

// Actions AM - will want to get edit data from users, staff, etc... hybrid actions?
import { addUser } from '../../../actions/userActions'
import { addCareer } from '../../../actions/careerActions'
import { addProject } from '../../../actions/projectActions'
import { addStaff } from '../../../actions/staffActions'

class AddDataModal extends Component {
    constructor(props) {
        super(props)

        this.state = this.props.data
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(this.state)
    }

    handleSubmit(e, data, dataType) {
        e.preventDefault()

        if (dataType === 'User') {
            this.props.dispatch(addUser(data))
        } else if (dataType === 'Careers') {
            this.props.dispatch(addCareer(data))
        } else if (dataType === 'Projects') {
            this.props.dispatch(addProject(data))
        } else if (dataType === 'Staff') {
            this.props.dispatch(addStaff(data))
        } 
    }

    render(props) {
        return (
            <form>
                { Object.keys(data).map((k, index) => {
                        return (
                        <FormLabel>
                            <span>{k}: </span>
                            <Input
                                type="text"
                                name={k}
                                value={Object.values(data)[index]}
                                onChange={(e) => this.handleChange(e)}
                            /><br/><br/>
                        </FormLabel>
                    )
                })}

                <Button type="button" onClick = {(e) => this.handleSubmit(e, this.state, this.props.dataType)}>
                    Add
                </Button>
            </form>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup())
})


export default connect(mapDispatchToProps)(AddDataModal)