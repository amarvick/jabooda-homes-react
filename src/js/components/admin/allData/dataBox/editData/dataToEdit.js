/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';
// import DOMPurify from 'dompurify' AM - remember to uninstall

// Design
import './dataToEdit.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

// Actions AM - will want to get edit data from users, staff, etc... hybrid actions?
import { editData, deleteData } from '../../../actions/crudActions'

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
        this.props.dispatch(editData(data, dataType))
    }

    handleDelete(e, id, dataType) {
        e.preventDefault()
        this.props.dispatch(deleteData(id, dataType))
    }

    // AM - ask for help here. Is this an ideal way? Maybe Max can help
    componentWillReceiveProps(nextProps) {
        this.state = nextProps.data
    }

    // AM - this works, but may not be the preferred solution. Look back later
    addListElement(e, index, dataType) {
        var newData = prompt("Enter a piece of data here for " + dataType)
        if (newData !== '' && newData !== null && newData !== undefined) {
            var stateKeys = Object.keys(this.state)
            var stateValueToModify
            var newValues

            for (var i = 0; i < stateKeys.length; i++) {
                if (dataType === String(stateKeys[i])) {
                    newValues = Object.values(this.state)[i].push(newData)
                    this.setState({
                        [e.target.name]: newValues
                    })
                }
            }
        }
    }
    
    // If an element is coming from a list, this will update. AM - this needs work. I don't think some of this code is needed, and it doesn't work for Project images.
    handleListElement(e, index, dataType, addEditOrDelete) {
        var newData
        var stateKeys = Object.keys(this.state)
        var stateValueToModify
        var newValues

        // May be a better way to get the key value instead of looping through?
        for (var i = 0; i < stateKeys.length; i++) {
            if (dataType === String(stateKeys[i])) {
                newValues = Object.values(this.state)[i]
            }
        }
        
        alert(dataType)
        alert(newValues)

        if (addEditOrDelete === 'ADD') {
            newData = prompt("Enter a piece of data here for " + dataType)
            newValues.push(newData)
        } else if (addEditOrDelete === 'EDIT') {
            newValues[index] = e.target.value // AM - this may be a lot of code to process all at once.
        } else if (addEditOrDelete === 'DELETE') {
            newValues.splice(index, 1)
        }

        alert(newValues)
        console.log(e)

        this.setState({
            [e.target.name]: newValues
        })

        console.log(this.state)
    }

    render(props) {
        var data = this.state || []
        var dataType = this.props.dataType
        var allKeys = this.props.allKeys

        // AM - when clicking cancel, it proceeds anyway...
        return (
            <form>
                { Object.keys(data).map((k, index) => {
                    if (allKeys.includes(Object.keys(data)[index])) { // AM - this can be improved...
                        if (Array.isArray(Object.values(data)[index])) {
                            if (k.includes('image')) {
                                return (
                                    <FormLabel>
                                        <span>{k}: </span>
                                        <ul 
                                            name={k} 
                                            className="dataListElementEdit">
                                            { Object.values(data)[index].map((lv, i) => {
                                                return (
                                                    <li>
                                                        <span 
                                                            className="removeListElement" 
                                                            class="fa fa-times-circle fa-2x"
                                                            onClick={(e) => this.handleListElement(e, i, k, 'DELETE')}/> 
                                                        <Input
                                                            type="text"
                                                            value={ lv } 
                                                            onChange={(e) => this.handleListElement(e, i, k, 'EDIT')}
                                                        />
                                                    </li>
                                                )
                                            })}
                                        </ul><br/>

                                        <Button onClick={(e) => this.addListElement(e, null, k, 'ADD')}>
                                            Add {k}
                                        </Button>
                                        <br/><br/>
                                    </FormLabel>
                                )
                            } else {
                                return (
                                    <FormLabel>
                                        <span>{k}: </span>
                                        <ul 
                                            name={k} 
                                            className="dataListElementEdit">
                                            { Object.values(data)[index].map((lv, i) => {
                                                return (
                                                    <li>
                                                        <span 
                                                            className="removeListElement" 
                                                            class="fa fa-times-circle fa-2x"
                                                            onClick={(e) => this.handleListElement(e, i, k, 'DELETE')}/> 
                                                        <Input
                                                            type="text"
                                                            value={ lv } 
                                                            onChange={(e) => this.handleListElement(e, i, k, 'EDIT')}
                                                        />
                                                    </li>
                                                )
                                            })}
                                        </ul><br/>

                                        <Button onClick={(e) => this.addListElement(e, null, k, 'ADD')}>
                                            Add {k}
                                        </Button>
                                        <br/><br/>
                                    </FormLabel>
                                )
                            }
                        } 
                        
                        else {
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
                    }
                })}

                <Button type="button" onClick = {(e) => this.handleSubmit(e, this.state, dataType)}>
                    Update Data
                </Button>

                <Button type="button" onClick={(e) => this.handleDelete(e, this.props.data._id, dataType)}>
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