/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
import DOMPurify from 'dompurify'

// Design
import '../../../../stylesheets/dataEditModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class DataToEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    setStateValues(stateVals, data) {
        var newStateVariable
        console.log(data)
        for (var i = 0; i < stateVals.length; i++) {
            newStateVariable = String(stateVals[i])
            alert(newStateVariable)
            console.log(data.newStateVariable)
            this.state[newStateVariable] = data.newStateVariable
        }

        console.log(this.state)
    }

    render(props) {
        var data = this.props.data
        var keys = this.props.keys
        this.setStateValues(keys, data)

        return (
            <form>
                {keys.map((k) => {
                    if (k !== '_id' && k !== 'id') {
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