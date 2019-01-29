/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import '../../../../stylesheets/userRequestsModal.scss'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

class DataEditModal extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div className="allPendingUsers" style={this.props.style}>
                <span onClick={this.props.closeDataModal}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />

                Here is the data in the modal:

                { this.props.data }
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


export default connect(mapDispatchToProps)(DataEditModal)