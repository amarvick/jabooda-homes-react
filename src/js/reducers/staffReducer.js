/* File Name: contactUsReducer.js                                           *
 * Description: Redux reducer for the team members                          */

import StaffActionTypes from '../actiontypes/staffActionTypes'
// import StaffData from '../../data/staff.json'

export default function reducer(state={
    loading: false,
    staffData: [],
    staffDataKeys: [
        'name',
        'image',
        'title'
    ],
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
                staffData: action.payload,
                staffDataKeys: Object.keys(action.payload[0] || {})
            }
        }
        
        case StaffActionTypes.FETCH_STAFF_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case StaffActionTypes.ADD_STAFF_SUCCESS: {
            return {...state,
                staffData:  [...state.staffData, action.payload],
            }
        }

        // case StaffActionTypes.EDIT_STAFF_SUCCESS: {
        //     return {...state,
        //         loading: false,
        //         error: action.payload
        //     }
        // }

        // case StaffActionTypes.EDIT_STAFF_ERROR: {
        //     return {...state,
        //         loading: false,
        //         error: action.payload
        //     }
        // }

        // case StaffActionTypes.DELETE_STAFF_SUCCESS: {
        //     return {...state,
        //         loading: false,
        //         error: action.payload
        //     }
        // }

        // case StaffActionTypes.DELETE_STAFF_ERROR: {
        //     return {...state,
        //         loading: false,
        //         error: action.payload
        //     }
        // }

        default: {}
    }
    return state
}


