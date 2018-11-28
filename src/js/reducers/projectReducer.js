/* File Name: projectReducer.js                                     *
 * Description: Redux reducer for the projects                      */

import ProjectActionTypes from '../actiontypes/projectActionTypes'
import ProjectData from '../../data/projects.json'

export default function reducer(state={
    projectData: ProjectData,
    submitted: false,
    error: null
}, action) {

    switch(action.type) {
        case ProjectActionTypes.UPDATE_MAIN_PROJECT: {
            return {...state,
                // Image index = 0
                submitted: true
            }
        }

        case ProjectActionTypes.SEND_EMAIL_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
