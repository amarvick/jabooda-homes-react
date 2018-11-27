/* File Name: projectReducer.js                                     *
 * Description: Redux reducer for the projects                      */

import ProjectActionTypes from '../actiontypes/projectActionTypes'

export default function reducer(state={
    submitted: false,
    error: null
}, action) {

    switch(action.type) {
        case ProjectActionTypes.SEND_EMAIL_SUCCESS: {
            return {...state,
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
