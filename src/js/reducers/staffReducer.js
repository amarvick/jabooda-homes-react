/* File Name: contactUsReducer.js                                   *
 * Description: Redux reducer for the artist                        */

import StaffActionTypes from '../actiontypes/staffActionTypes'

export default function reducer(state={
    fetching: false,
    fetched: false,
    staffData: [],
    error: null
}, action) {

    switch(action.type) {
        case StaffActionTypes.FETCHING_STAFF: {
            return {...state,
                fetching: true
            }
        }

        case StaffActionTypes.FETCH_STAFF_SUCCESS: {
            return {...state,
                fetching: false,
                fetched: true,
                staffData: action.payload
            }
        }
        
        case StaffActionTypes.FETCH_STAFF_ERROR: {
            return {...state,
                fetching: false,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}


