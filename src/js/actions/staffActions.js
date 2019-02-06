/* File Name: staffActions.js                                               *
 * Description: Retrieves all staff members                                 */

import StaffActionTypes from '../actiontypes/staffActionTypes'
import axios from 'axios'

export function loadStaffData() {
    return function action(dispatch) {
        dispatch({
            type: StaffActionTypes.FETCHING_STAFF
        })

        fetch("http://localhost:3001/api/getStaffData") // AM - shoul probably change later
            .then(data => data.json())
            .then(res => {
                    dispatch({
                        type: StaffActionTypes.FETCH_STAFF_SUCCESS,
                        payload: res.data
                    })
                    console.log(res.data)
                }
            ) 
    
            // AM - make this in to an error screen?
            .catch(function(error) {
                dispatch({
                    type: StaffActionTypes.FETCH_STAFF_ERROR,
                    payload: error
                })
                alert('Staff data NOT collected')
                console.log(error)
            })
    }
}

// AM - Work this a little more
export function editStaff(data) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/updateStaffData', data)
        .then(function(response) {
            console.log(response.data)
            dispatch({
                type: StaffActionTypes.EDIT_STAFF_SUCCESS,
                payload: response.data.update
            })
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            dispatch({
                type: StaffActionTypes.EDIT_STAFF_ERROR,
                payload: error
            })
            console.log(error)
        })
    }
}

export function deleteStaff(id) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/deleteStaffData', id) // AM - id is passed in as a key-value pair. Maybe a better way of doing this
        .then(function(response) {
            dispatch({
                type: StaffActionTypes.DELETE_STAFF_SUCCESS,
                payload: response.data.id
            })
        })

        .catch(function(error) {
            dispatch({
                type: StaffActionTypes.DELETE_STAFF_ERROR,
                payload: error
            })
        })
    }
}

// AM - make in to joint function possibly?
export function addStaff(data) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/createStaffData', data)
        .then(function(response) {
            dispatch({
                type: StaffActionTypes.ADD_STAFF_SUCCESS,
                payload: response.data.newData
            })
        })

        .catch(function(error) {
            dispatch({
                type: StaffActionTypes.ADD_STAFF_ERROR,
                payload: error
            })
        })
    }
}