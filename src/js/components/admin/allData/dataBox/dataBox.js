/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import './dataBox.scss'
import Modal from '@material-ui/core/Modal'

import DataEditModal from './editData/dataEditModal'


const styles = theme => ({
    // paper: {
    //     position: 'absolute',
    //     width: theme.spacing.unit * 50,
    //     backgroundColor: theme.palette.background.paper,
    //     boxShadow: theme.shadows[5],
    //     padding: theme.spacing.unit * 4,
    // },
});

class DataBox extends Component {
    constructor() {
        super()

        this.state = {
            displayDataEditModal: false
        }

        this.showDataModal = this.showDataModal.bind(this)
        this.closeDataModal = this.closeDataModal.bind(this)
    }

    showDataModal() {
        this.setState({ displayDataEditModal: true })
    }

    closeDataModal() {
        this.setState({ displayDataEditModal: false })
    }

    // Displaying all pending user requests
    render(props) {
        const { classes } = this.props
        var theData =  this.props.data 
        var dataType = this.props.dataType
        var allKeys = this.props.allKeys

        return (
            <div className="dataBox"> 
                <p onClick={this.showDataModal}>
                    {dataType} Data
                </p> <br/>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.displayDataEditModal}
                    onClose={this.closeDataModal}
                    disableBackdropClick={true}
                >
                    <DataEditModal
                        className="dataEditModal"
                        data={theData}
                        dataType={dataType}
                        jobTitle={this.props.header}
                        allKeys={allKeys}
                        closeDataModal={this.closeDataModal} />
                </Modal>
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

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
    state: state,
    error: state.user.error,
    loading: state.user.loading,
    userData: state.user.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(DataBox);