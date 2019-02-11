/* File Name: userActions.js                                                *
 * Description: Retrieves all users                                         */

import UserActionTypes from '../actiontypes/userActionTypes'
import { editData, deleteData } from './crudActions'
import axios from 'axios'

export function loadUserData() {
    return function action(dispatch) {
        dispatch({
            type: UserActionTypes.FETCHING_USERS
        })

        fetch("http://localhost:3001/api/getUserData")  // AM - shoul probably change later
            .then(data => data.json())
            .then(res => {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: res.data
                })
            }) 
    
            // AM - make this in to an error screen?
            .catch(function(error) {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                    payload: error
                })
            })
    }
}

// AM - just forward this to 'editUser' since that is what you are doing essentially? Make naming conventions good
export function approveUser(theUser) {
    return async function action(dispatch) {
        theUser.pending = 'False'
        dispatch(editData(theUser, 'User'))
    }
}

// AM - forward this to deleteUser function. Keep this for naming convention sake
export function rejectUser(theUser) {
    return async function action(dispatch) {
        dispatch(deleteData(theUser._id, 'User')) // or 'id'. test this
    }
}

export function updatePassword(theUser) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/users/changePassword', theUser)
        .then(function(response) {
            dispatch({
                type: UserActionTypes.EDIT_USER_SUCCESS,
                payload: response.data.update
            })
            alert('Update successful')
        })

        .catch(function(error) {
            dispatch({
                type: UserActionTypes.EDIT_USER_ERROR,
                payload: error
            })
            alert('Update failed')
        })
    }
}