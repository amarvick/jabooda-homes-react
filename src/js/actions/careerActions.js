/* File Name: careerActions.js                                      *
 * Description: Retrieves the user's top artists, then immediately  *
 *              calls to get that artist's top songs.               */

import CareerActionTypes from '../actiontypes/careerActionTypes'
import axios from 'axios'

export function handleOpenModal() {
    return function action(dispatch) {
        dispatch({ type: CareerActionTypes.HANDLE_OPEN_APP_MODAL })
    }
}

export function handleCloseModal() {
    return function action(dispatch) {
        dispatch({ type: CareerActionTypes.HANDLE_CLOSE_APP_MODAL })
    }
}

export function handleSubmit(e, state) {
    return async function action(dispatch) {
        e.preventDefault();

        // Assign variables
        const { 
            name, 
            email, 
            jobTitle,
            resume,
            summary 
          } = state
      
    
        const form = await axios.post('/api/submitApplication', {
            name, 
            email, 
            jobTitle,
            resume,
            summary 
        })

        .then(function(response) {
            dispatch({ type: CareerActionTypes.SEND_APPLICATION_SUCCESS })
        })

        .catch(function(error) {
            dispatch({
                type: CareerActionTypes.SEND_APPLICATION_ERROR,
                payload: error
            })  
        })
    }
}