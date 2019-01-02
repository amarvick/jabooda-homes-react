/* File Name: contactUsReducer.js                                   *
 * Description: Redux reducer for the artist                        */

import StaffActionTypes from '../actiontypes/staffActionTypes'
import StaffData from '../../data/staff.json'

export default function reducer(state={
    loading: false,
    staffData: StaffData, // Change back to empty array
    error: null
}, action) {

    switch(action.type) {
        case StaffActionTypes.FETCHING_STAFF: {
            return {...state,
                loading: true
            }
        }

        case StaffActionTypes.FETCH_STAFF_SUCCESS: {
            return {...state,
                loading: false,
                staffData: action.payload
            }
        }
        
        case StaffActionTypes.FETCH_STAFF_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}


