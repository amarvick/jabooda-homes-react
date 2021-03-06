/* File Name: contactUsActions.js                                           *
 * Description: Enables user to submit emails to Jabooda Admins             */

import ContactUsActionTypes from '../actiontypes/contactUsActionTypes'
import axios from 'axios'

var link = "http://jabooda-homes-backend.herokuapp.com/api/"

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
    
        const form = await axios.post(link + "sendEmailform", {
            name, 
            email,
            subject,
            message
        })

        .then(function(response) {
            console.log(response)
            dispatch({ type: ContactUsActionTypes.SEND_EMAIL_SUCCESS })
        })

        .catch(function(error) {
            console.log(error)
            dispatch({
                type: ContactUsActionTypes.SEND_EMAIL_ERROR,
                payload: error
            })  
        })
    }
}