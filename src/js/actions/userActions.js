/* File Name: userActions.js                                                *
 * Description: Retrieves all users                                         */

import UserActionTypes from '../actiontypes/userActionTypes'
import axios from 'axios'

export function loadUserData() {
    return function action(dispatch) {
        dispatch({
            type: UserActionTypes.FETCHING_USERS
        })

        fetch("http://localhost:3001/api/getUserData")  // AM - shoul probably change later
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

// AM - just forward this to 'editUser' since that is what you are doing essentially? Make naming conventions good
export function approveUser(theUser) {
    return async function action(dispatch) {
        // const updateNewUser = await axios.post('http://localhost:3001/api/updateUserData', theUser)

        // .then(function(response) {
        //     console.log(response)
        //     // Redirect user to home page notifying them that the user has been approved
        // })

        // .catch(function(error) {
        //     console.log(error)
        // })
        dispatch(editUser(theUser))
    }
}

// AM - forward this to deleteUser function. Keep this for naming convention sake
export function rejectUser(theUser) {
    return async function action(dispatch) {
        // const deleteNewUser = await axios.post('/api/deleteUserData', theUser)

        // .then(function(response) {
        //     console.log(response)
        //     // Redirect user to home page notifying them that the user has been deleted
        // })

        // .catch(function(error) {
        //     console.log(error)
        // })
        dispatch(deleteUser(theUser._id)) // or 'id'. test this
    }
}

// AM - make in to joint function possibly?
export function addUser(data) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/createUserData', data)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}

// AM - make in to joint function possibly?
export function editUser(data) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/updateUserData', data)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}

// AM - make in to joint function possibly?
export function deleteUser(id) {
    return async function action(dispatch) {
        axios.post('http://localhost:3001/api/deleteUserData', id)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}

export function updatePassword(theUser) {
    return async function action(dispatch) {

        const updateUserPassword = await axios.post('/api/changeUserData', theUser)

        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been deleted
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}