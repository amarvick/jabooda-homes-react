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
import { editUser, deleteUser } from '../../../actions/userActions'
import { editCareer, deleteCareer } from '../../../actions/careerActions'
import { editProject, deleteProject } from '../../../actions/projectActions'
import { editStaff, deleteStaff } from '../../../actions/staffActions'

class DataToEdit extends Component {
    constructor(props) {
        super(props)

        this.state = this.props.data
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e, data, dataType) {
        e.preventDefault()
        if (dataType === 'User') {
            this.props.dispatch(editUser(data))
        } else if (dataType === 'Careers') {
            this.props.dispatch(editCareer(data))
        } else if (dataType === 'Projects') {
            this.props.dispatch(editProject(data))
        } else if (dataType === 'Staff') {
            this.props.dispatch(editStaff(data))
        } 
    }

    handleDelete(e, id, dataType) {
        e.preventDefault()

        if (dataType === 'User') {
            this.props.dispatch(deleteUser(id))
        } else if (dataType === 'Careers') {
            this.props.dispatch(deleteCareer(id))
        } else if (dataType === 'Projects') {
            this.props.dispatch(deleteProject(id))
        } else if (dataType === 'Staff') {
            this.props.dispatch(deleteStaff(id))
        } 
    }

    // AM - ask for help here. Is this an ideal way? Maybe Max can help
    componentWillReceiveProps(nextProps) {
        this.state = nextProps.data
    }

    render(props) {
        var data = this.state || []
        var allKeys = this.props.allKeys

        return (
            <form>
                { Object.keys(data).map((k, index) => {
                    if (k !== '_id' && k !== 'id') {
                        if (allKeys.includes(Object.keys(data)[index])) { // AM - this can be improved...
                            console.log(allKeys)
                            console.log(Object.keys(data)[index])
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
                        }
                    } else {
                        var idVal
                        if (k === '_id') {
                            idVal = data._id
                        } else {
                            idVal = data.id
                        }
                        return (
                            <FormLabel>
                                <span>{k}: {idVal}</span>
                                <br/><br/>
                            </FormLabel>
                        )
                    }
                })}

                <Button type="button" onClick = {(e) => this.handleSubmit(e, this.state, this.props.dataType)}>
                    Update Data
                </Button>

                <Button type="button" onClick={(e) => this.handleDelete(e, this.props.data._id, this.props.dataType)}>
                    Remove Data
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


export default connect(mapDispatchToProps)(DataToEdit)