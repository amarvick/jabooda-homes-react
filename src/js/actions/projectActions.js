/* File Name: projectActions.js                                             *
 * Description: Redux actions for the projects                              */

import ProjectActionTypes from '../actiontypes/projectActionTypes'
import axios from 'axios'

var link = 'http://jabooda-homes-backend.herokuapp.com/api/'

export function loadProjectData() {
    return function action(dispatch) {
        dispatch({ type: ProjectActionTypes.FETCHING_PROJECTS })

        fetch(link + "getProjectData")
            .then(data => data.json())
            .then(function(response) {
                dispatch({
                    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
                    payload: response.data
                })
            })
    
            .catch(function(error) {
                dispatch({
                    type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
                    payload: error
                })
            })

    }
}

// AM - Work this a little more
export function editProject(data) {
    return async function action(dispatch) {
        axios.post(link + "/updateProjectData", data)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}

export function deleteProject(id) {
    return async function action(dispatch) {
        axios.post(link + "deleteUserData", id)
        .then(function(response) {
            console.log(response)
            // Redirect user to home page notifying them that the user has been approved
        })

        .catch(function(error) {
            console.log(error)
        })
    }
}

// Updates the main project's image from clicking on any sub image
export function updateImage(index) {
    return function action(dispatch) {
        dispatch({
            type: ProjectActionTypes.UPDATE_PROJECT_IMAGE_INDEX,
            payload: index
        })
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
    }
}

export function seeLeftImage(index) {
    return function action(dispatch) {
        if (index > 0) {
            dispatch({ 
                type: ProjectActionTypes.UPDATE_PROJECT_IMAGE_INDEX,
                payload: index - 1
            })
        }
    }
}

export function seeRightImage(index, maxArraySize) {
    return function action(dispatch) {
        if (index < maxArraySize) {
            dispatch({ 
                type: ProjectActionTypes.UPDATE_PROJECT_IMAGE_INDEX,
                payload: index + 1
            })
        }
    }
}