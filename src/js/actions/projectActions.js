/* File Name: projectActions.js                                     *
 * Description: Redux actions for the projects                      */

import ProjectActionTypes from '../actiontypes/projectActionTypes'
import axios from 'axios'

export function loadData() {
    return function action(dispatch) {
        dispatch({ type: })
    }
}


export function handleSubmit(e, state) {
    return async function action(dispatch) {
        e.preventDefault();

        // Assign variables
        const { 
            name, 
            email, 
            subject,
            message 
        } = state
    
        const form = await axios.post('/api/sendEmailform', {
            name, 
            email,
            subject,
            message
        })

        .then(function(response) {
            dispatch({ type: ContactUsActionTypes.SEND_EMAIL_SUCCESS })
        })

        .catch(function(error) {
            dispatch({
                type: ContactUsActionTypes.SEND_EMAIL_ERROR,
                payload: error
            })  
        })
    }
}