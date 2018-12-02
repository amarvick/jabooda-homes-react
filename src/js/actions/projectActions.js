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

export function handleProjectUpdate(id) {
    return function action(dispatch) {
        dispatch({ 
            type: ProjectActionTypes.UPDATE_MAIN_PROJECT,
            payload: id
        })
    }
}

export function updateTab(tab) {
    return function action(dispatch) {
        dispatch({ 
            type: ProjectActionTypes.UPDATE_PROJECTS_TO_DISPLAY,
            payload: tab
        })
        debugger
    }
}