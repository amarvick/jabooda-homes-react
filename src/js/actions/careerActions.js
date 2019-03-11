/* File Name: careerActions.js                                              *
 * Description: Retrieves the careers                                       */

import CareerActionTypes from '../actiontypes/careerActionTypes'
import axios from 'axios'

var link = 'http://jabooda-homes-backend.herokuapp.com/api/'

export function loadCareerData() {
    return function action(dispatch) {
        dispatch({
            type: CareerActionTypes.FETCHING_CAREERS
        })

        fetch(link + "getCareerData") 
            .then(data => data.json())
            .then(res => 
                dispatch({
                    type: CareerActionTypes.FETCH_CAREERS_SUCCESS,
                    payload: res.data
                })
            ) 
    
            // AM - make this in to an error screen?
            .catch(function(error) {
                console.log(error)
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
      
    
        const form = await axios.post(link + 'submitApplication', {
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

// AM - Work this a little more
export function editCareer(data) {
    return async function action(dispatch) {
        axios.post(link + '/updateCareerData', data)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}

export function deleteCareer(id) {
    return async function action(dispatch) {
        axios.post(link + '/deleteCareerData', id)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}