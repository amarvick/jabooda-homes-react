/* File Name: userActions.js                                                *
 * Description: Retrieves all users                                         */

import UserActionTypes from '../actiontypes/userActionTypes'
import { editData, deleteData } from './crudActions'
import axios from 'axios'

var link = 'http://jabooda-homes-backend.herokuapp.com/api/'

export function loadUserData() {
    return function action(dispatch) {
        dispatch({
            type: UserActionTypes.FETCHING_USERS
        })

        fetch(link + "getUserData")  // AM - shoul probably change later
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

// Generate 10 character random password
export function resetPassword(email) {
    return async function action(dispatch) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+{}[];':,.<>/?";
    
        for (var i = 0; i < 10; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        var theUser = {
            email: email,
            newPass: text
        }

        axios.post(link + "resendPassword", theUser)
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

export function updatePassword(theUser) {
    return async function action(dispatch) {
        axios.post(link + "users/changePassword", theUser)
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