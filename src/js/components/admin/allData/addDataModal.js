/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
// import DOMPurify from 'dompurify' AM - remember to uninstall

// Design
import '../../../../stylesheets/addDataModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

// Actions AM - will want to get edit data from users, staff, etc... hybrid actions?
import { addUser } from '../../../actions/userActions'
// import { addCareer } from '../../../actions/careerActions'
// import { addProject } from '../../../actions/projectActions'
import { addStaff } from '../../../actions/staffActions'

class AddDataModal extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    // AM - better way of doing this? Not mutating state this way...
    initializeState(stateVals) {
        var stateVal
        for (var i = 0; i < stateVals; i++) {
            stateVal = stateVals[i]
            this.setState({
                stateVal: ''
            })
        }

        console.log(this.state)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(this.state)
    }

    handleSubmit(e, data, dataType) {
        e.preventDefault()
        alert(dataType)
        dataType = 'Staff'

        if (dataType === 'User') {
            this.props.dispatch(addUser(data))
        } else if (dataType === 'Careers') {
            // this.props.dispatch(addCareer(data))
        } else if (dataType === 'Projects') {
            // this.props.dispatch(addProject(data))
        } else if (dataType === 'Staff') {
            this.props.dispatch(addStaff(data))
        } 
    }

    render(props) {
        var allKeys = Object.values(this.props.keys)
        this.initializeState(allKeys)

        return (
            <div id="addDataForm">
                <span onClick={this.props.closeDataModal}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />
                <form>
                    { allKeys.map((k, index) => { // AM - look in to this as well.. thought this would pass an array
                            return (
                            <FormLabel>
                                <span>{k}: </span>
                                <Input
                                    type="text"
                                    name={k}
                                    onChange={(e) => this.handleChange(e)}
                                /><br/><br/>
                            </FormLabel>
                        )
                    })}

                <Button type="button" onClick = {(e) => this.handleSubmit(e, this.state, this.props.dataType)}>
                    Add
                </Button>
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


export default connect(mapDispatchToProps)(AddDataModal)