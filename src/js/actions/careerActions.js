/* File Name: careerActions.js                                              *
 * Description: Retrieves the careers                                       */

import CareerActionTypes from '../actiontypes/careerActionTypes'
import axios from 'axios'

export function loadCareerData() {
    return function action(dispatch) {
        dispatch({
            type: CareerActionTypes.FETCHING_CAREERS
        })

        fetch("http://localhost:3001/api/getCareerData")  // AM - shoul probably change later
            .then(data => data.json())
            .then(res => 
                dispatch({
                    type: CareerActionTypes.FETCH_CAREERS_SUCCESS,
                    payload: res.data
                })
            ) 
    
            // AM - make this in to an error screen?
            .catch(function(error) {
                dispatch({
                    type: CareerActionTypes.FETCH_CAREERS_ERROR,
                    payload: error
                })
            })
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