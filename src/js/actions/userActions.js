/* File Name: userActions.js                                                *
 * Description: Retrieves all users                                         */

import UserActionTypes from '../actiontypes/userActionTypes'
import axios from 'axios'

export function loadData() {
    return function action(dispatch) {
        dispatch({
            type: UserActionTypes.FETCHING_USERS
        })

        axios.get("/api/getUserData")
            .then(data => data.json())
            .then(res => {
                console.log('fetching users was successful')

                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: res.data
                })
            }) 
    
            // AM - make this in to an error screen?
            .catch(function(error) {
                console.log('fetching users was NOT successful')
                dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                    payload: error
                })
            })
    }
}

export function approveUser() {
    return function action(dispatch) {

    }
}

export function disapproveUser() {
    return function action(dispatch) {

    }
}