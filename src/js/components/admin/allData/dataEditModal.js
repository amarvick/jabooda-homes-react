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

class DataEditModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            addDataModalOpened: false
        }
    }

    updateIndex(i) {
        this.setState({ index: i })
    }

    openAddDataModal() {
        this.setState({ addDataModalOpened: true })
    }

    closeAddDataModal() {
        this.setState({ addDataModalOpened: false })
    }

    render(props) {
        var data = this.props.data
        var allKeys = this.props.allKeys
        console.log(allKeys)

        return (
            <Grid container spacing={24} className="allEditableData" style={this.props.style}>
                <span onClick={this.props.closeDataModal}
                    id="exitModal"
                    class="fa fa-times-circle fa-2x" />

                <Grid item xs={12} sm={3} className="dataContainer">
                    Here is the data in the modal: <br/>        

                    { data.map((d, index) => {
                        var allKeyValues = []
                        for (var i = 0; i < Object.keys(d).length; i++) {
                            console.log(Object.keys(d)[i])
                            if (allKeys.includes(Object.keys(d)[i])) {
                                allKeyValues.push(Object.keys(d)[i] + ': ' + Object.values(d)[i])
                            }
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

                    <Button onClick={() => this.openAddDataModal()}>
                        Add { this.props.dataType }
                    </Button>

                </Grid>


                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.addDataModalOpened}
                    onClose={this.closeAddDataModal}
                    disableBackdropClick={true}
                    dataType={this.props.dataType}
                >
                    <AddDataModal
                        closeAddDataModal={this.closeAddDataModal} 
                        keys={allKeys}/>
                </Modal>

                <Grid item xs={12} sm={9} id="mainProjectToEdit">
                    <h1> 
                        <DataToEdit 
                            data={ data[this.state.index] }
                            dataType={this.props.dataType}
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