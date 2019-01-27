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

export function approveUser(theUser) {
    return async function action(dispatch) {
        console.log(theUser)
        dispatch({
            type: UserActionTypes.ADD_USER
        })

        const postNewUser = await axios.post('/api/createUserData', theUser)

        .then(function(response) {
            dispatch({
                type: UserActionTypes.ADD_USER
            })
        })

        .catch(function(error) {
            alert('there was an error')
            console.log(error)
        })
    }
}

export function rejectUser(theUser) {
    return function action(dispatch) {

    }
}