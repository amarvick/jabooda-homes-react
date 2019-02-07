/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import './addDataModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

// Actions 
import { createData } from '../../../actions/crudActions'

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
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e, data, dataType) {
        e.preventDefault()
        this.props.dispatch(createData(data, dataType))
    }

    render(props) {
        var allKeys = Object.values(this.props.keys)
        var dataType = this.props.dataType

        return (
            <div id="addDataForm">
                <span onClick={this.props.closeAddDataModal}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />
                <form>
                    { allKeys.map((k, index) => { // AM - look in to this as well.. thought this would pass an array
                            return (
                            <FormLabel>
                                <span>{k}*: </span>
                                <Input
                                    type="text"
                                    name={k}
                                    onChange={(e) => this.handleChange(e)}
                                    required
                                /><br/><br/>
                            </FormLabel>
                        )
                    })}

                <Button type="button" onClick = {(e) => this.handleSubmit(e, this.state, dataType)}>
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