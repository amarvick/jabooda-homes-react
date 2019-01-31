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

import DataToEdit from './dataToEdit'

class DataEditModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }
    }

    updateIndex(i) {
        this.setState({ index: i })
    }

    render(props) {
        var data = this.props.data
        var allKeys = Object.keys(data[0]) // AM - buggy. Review this

        return (
            <Grid container spacing={24} className="allEditableData" style={this.props.style}>
                <span onClick={this.props.closeDataModal}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />

                <Grid item xs={12} sm={3} className="dataContainer">
                    Here is the data in the modal: <br/>        

                    { data.map((d, index) => {
                        var dataEntry
                        var allKeyValues = []
                        for (var i = 0; i < Object.keys(d).length; i++) {
                            allKeyValues.push(String(Object.keys(d)[i]) + ': ' + String(Object.values(d)[i]))
                        }    
                        return (
                            <div onClick={() => this.updateIndex(index)}  className="dataEntry">
                                <ul className="dataEntryValue">
                                    {
                                        allKeyValues.map((d) => {
                                            return (
                                                <li>
                                                    {d}<br/>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }) }

                </Grid>

                <Grid item xs={12} sm={9} id="mainProjectToEdit">
                    <h1> 
                        <DataToEdit 
                            data={data[this.state.index]}
                            keys={allKeys}
                        />
                    </h1>
                </Grid>
            </Grid>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    startup: () => dispatch(StartupActions.startup())
})


export default connect(mapDispatchToProps)(DataEditModal)