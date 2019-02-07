/* File Name: userRequestsModal.js                                          *
 * Description: Modal showcasing all users                                  */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux';

// Design
import '../../../../stylesheets/dataEditModal.scss'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import AddDataModal from './addDataModal'
import DataToEdit from './dataToEdit'

class ConfirmCreateDataModal extends Component {
    constructor(props) {
        super(props)

        this.closeAddDataModal = this.closeAddDataModal.bind(this)
    }

    render(props) {
        var dataId = this.props.data || []
        var allKeys = this.props.allKeys
        var dataType = this.props.dataType
        var noDataDisplayed
        var editOrRemoveDataButtons

        return (
            <div>
                <span onClick={this.props.closeConfirmCreateDataModal}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />

                <p>
                    Are you sure you want to Delete?
                </p>
                
                {/* AM - this needs a revisit*/}
                <Button onClick={() => this.props.deleteData}>
                    Add { dataType }
                </Button>

                <Button onClick={this.props.closeConfirmUpdateDataModal}>
                    Cancel
                </Button>
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


export default connect(mapDispatchToProps)(ConfirmCreateDataModal)