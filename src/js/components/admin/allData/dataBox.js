/* File Name: userRequests.js                                                    *
 * Description: Displays all open positions                                 */

import React, { Component, StartupActions } from 'react'
import { connect } from 'react-redux'

import '../../../../stylesheets/userRequests.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import LoadingScreen from '../../loadingScreen'
import ErrorScreen from '../../errorScreen'
import DataEditModal from './dataEditModal'

import { loadData } from '../../../actions/userActions'

function getModalStyle() {
    // const top = 50
    // const left = 50

    // return {
    //     top: `${top}%`,
    //     left: `${left}%`,
    //     transform: `translate(-${top}%, -${left}%)`,
    // };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
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

    componentWillMount() {
        // AM - look in to this later. Getting that annoying error again
        this.props.dispatch(loadData())
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
        var theData = this.props.data
        var dataType = this.props.dataType

        return (
            <div>
                <p onClick={this.showDataModal}>Data for: {dataType}</p>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.displayDataEditModal}
                    onClose={this.closeDataModal}
                    disableBackdropClick={true}
                >
                    <DataEditModal
                        style={getModalStyle()}
                        data={theData}
                        jobTitle={this.props.header}
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