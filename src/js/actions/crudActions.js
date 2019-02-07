// AM - here, I'm going to put in actions for deleting, creating and updating data for simplicity.

import StaffActionTypes from '../actiontypes/staffActionTypes'
import CareerActionTypes from '../actiontypes/careerActionTypes'
import ProjectActionTypes from '../actiontypes/projectActionTypes'
import UserActionTypes from '../actiontypes/userActionTypes'

import axios from 'axios'

export function editData(data, db) {
    return async function action(dispatch) {

        var linkDPTypes = {} 
        linkDPTypes = createLinkAndDispatchTypes(db, "update")

        axios.post('http://localhost:3001/api/' + linkDPTypes.apiLink, data)
        .then(function(response) {
            dispatch({
                type: linkDPTypes.dispatchTypeSuccess,
                payload: response.data.update
            })
            alert('Update successful')
        })

        .catch(function(error) {
            dispatch({
                type: linkDPTypes.dispatchTypeError,
                payload: error
            })
            alert('Update failed')
        })
    }
}

export function deleteData(id, db) {
    return async function action(dispatch) {
        var linkDPTypes = {} 
        linkDPTypes = createLinkAndDispatchTypes(db, "delete")

        axios.post('http://localhost:3001/api/' + linkDPTypes.apiLink, id) // AM - id is passed in as a key-value pair. Maybe a better way of doing this
        .then(function(response) {
            dispatch({
                type: linkDPTypes.dispatchTypeSuccess,
                payload: response.data.id
            })
            alert('Delete successful')
        })

        .catch(function(error) {
            dispatch({
                type: linkDPTypes.dispatchTypeError,
                payload: error
            })
            alert('Delete Failed')
        })
    }
}

export function createData(data, db) {
    return async function action(dispatch) {
        var linkDPTypes = {} 
        linkDPTypes = createLinkAndDispatchTypes(db, "create")

        axios.post('http://localhost:3001/api/' + linkDPTypes.apiLink, data)
        .then(function(response) {
            dispatch({
                type: linkDPTypes.dispatchTypeSuccess,
                payload: response.data.newData
            })
        })

        .catch(function(error) {
            dispatch({
                type: linkDPTypes.dispatchTypeError,
                payload: error
            })
        })
    }
}

// Will generate which link to make a POST request to as well as the appropriate action types
export function createLinkAndDispatchTypes(db, theAction) {
    var linkAndDispatchTypes = {
        apiLink: '',
        dispatchTypeSuccess: '',
        dispatchTypeError: ''
    }
    var objectData, actionTypeSuccess, actionTypeError

    linkAndDispatchTypes.apiLink = theAction + db + 'Data'
    
    if (db === 'Staff') {
        objectData = StaffActionTypes
    } else if (db === 'Career') {
        objectData = CareerActionTypes
    } else if (db === 'Project') {
        objectData = ProjectActionTypes
    } else if (db === 'User') {
        objectData = UserActionTypes
    }

    var objectKeySet = Object.keys(objectData)
    var theKey

    for (var i = 0; i < objectKeySet.length; i++) {

        theKey = objectKeySet[i]
        if (theKey.includes(theAction.toUpperCase()) && theKey.includes(db.toUpperCase())) {
            if (theKey.includes('SUCCESS')) {
                linkAndDispatchTypes.dispatchTypeSuccess = Object.keys(objectData)[i]
            } else if (theKey.includes('ERROR')) {
                linkAndDispatchTypes.dispatchTypeError = Object.keys(objectData)[i]
            }
        }
    }

    return linkAndDispatchTypes
}