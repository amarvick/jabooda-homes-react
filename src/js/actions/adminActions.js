/* File Name: adminActions.js                                               *
 * Description: Redux actions for the projects                              */

import AdminActionTypes from '../actiontypes/adminActionTypes'
import axios from 'axios'

export function validateLogin(e, state) {
    return async function action(dispatch) {
        e.preventDefault();

        // Assign variables
        const { 
            email, 
            password
        } = state
    
        axios.post('/api/users/login', {
            email,
            password
        })

        .then(function(response) {
            dispatch({ type: AdminActionTypes.FETCH_ADMIN_SUCCESS })
        })

        .catch(function(error) {
            dispatch({ type:AdminActionTypes.FETCH_ADMIN_ERROR })  
            console.log(error)
        })
    }
}

