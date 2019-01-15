/* File Name: projectReducer.js                                     *
 * Description: Redux reducer for the projects                      */

import ProjectActionTypes from '../actiontypes/projectActionTypes'
import ProjectData from '../../data/projects.json'

export default function reducer(state={
    fetching: false,
    fetched: false,
    projectData: ProjectData,
    projectsToDisplay: 'Sold',
    selectedProjectIndex: 0,
    selectedImageInProject: 0,
    submitted: false,
    error: null
}, action) {

    switch(action.type) {
        // Currently fetching projects
        case ProjectActionTypes.FETCHING_PROJECTS: {
                return {...state,
                fetching: true
            }
        }

        // If fetchinig projects from DB was a success
        case ProjectActionTypes.FETCH_PROJECTS_SUCCESS: {
            return {...state,
                fetching: false,
                fetched: true,
                projectData: action.payload
            }
        }
    
        // If there was an error in fetching projects from DB
        case ProjectActionTypes.FETCH_PROJECTS_ERROR: {
            return {...state,
                fetching: false,
                error: action.payload
            }
        }

        // Clicking on a new project from right menu to display in the main section 
        case ProjectActionTypes.UPDATE_MAIN_PROJECT: {
            return {...state,
                selectedImageInProject: 0,
                selectedProjectIndex: action.payload
            }
        }

        // When user selects any image in a given main project. This will be 0 when switching to a new project
        case ProjectActionTypes.UPDATE_PROJECT_IMAGE_INDEX: {
            return {...state,
                selectedImageInProject: action.payload
            }
        }
        
        // When user switches between 'sold', 'for sale' and 'in progress' tabs
        case ProjectActionTypes.UPDATE_PROJECTS_TO_DISPLAY: {
            return {...state,
                projectsToDisplay: action.payload
            }
        }

        default: {}
    }
    return state
}
