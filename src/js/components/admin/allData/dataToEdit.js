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

    render(props) {
        var data = this.state || []
        var dataType = this.props.dataType
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