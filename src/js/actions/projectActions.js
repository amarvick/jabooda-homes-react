/* File Name: projectActions.js                                     *
 * Description: Redux actions for the projects                      */

import ProjectActionTypes from '../actiontypes/projectActionTypes'
import axios from 'axios'

// AM - needs more work
export function loadData() {
    return function action(dispatch) {
        dispatch({ type: ProjectActionTypes.FETCHING_PROJECTS })
    }
}


export function handleSubmit(e, state) {
    return async function action(dispatch) {
       
    }
}