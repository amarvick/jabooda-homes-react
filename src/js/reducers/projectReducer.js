/* File Name: projectReducer.js                                     *
 * Description: Redux reducer for the projects                      */

import ProjectActionTypes from '../actiontypes/projectActionTypes'
import ProjectData from '../../data/projects.json'

export default function reducer(state={
    fetching: false,
    fetched: false,
    projectData: ProjectData,
    projectsToDisplay: 'Sold',
    selectedProject: 0,
    selectedImageInProject: 0,
    submitted: false,
    error: null
}, action) {

    switch(action.type) {
        case ProjectActionTypes.FETCHING_PROJECTS: {
            return {...state,
                fetching: true
            }
        }

        case ProjectActionTypes.FETCH_PROJECTS_SUCCESS: {
            return {...state,
                fetching: false,
                fetched: true
            }
        }
    
        case ProjectActionTypes.FETCH_PROJECTS_ERROR: {
            return {...state,
                fetching: false
            }
        }

        case ProjectActionTypes.UPDATE_MAIN_PROJECT: {
            return {...state,
                selectedImageInProject: 0,
                selectedProject: action.payload
            }
        }

        case ProjectActionTypes.UPDATE_PROJECT_IMAGE_INDEX: {
            return {...state,
                selectedImageInProject: 0,
                selectedProject: action.payload
            }
        }

        case ProjectActionTypes.UPDATE_PROJECTS_TO_DISPLAY: {
            return {...state,
                projectsToDisplay: action.payload
            }
        }

        default: {}
    }
    return state
}
