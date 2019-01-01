/* File Name: contactUsActions.js                                   *
 * Description: Retrieves the user's top artists, then immediately  *
 *              calls to get that artist's top songs.               */

import ContactUsActionTypes from '../actiontypes/contactUsActionTypes'
import axios from 'axios'

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