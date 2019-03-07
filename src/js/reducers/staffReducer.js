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
                staffData: action.payload
            }
        }
        
        case StaffActionTypes.FETCH_STAFF_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case StaffActionTypes.CREATE_STAFF_SUCCESS: {
            return {...state,
                staffData:  [...state.staffData, action.payload],
            }
        }

        case StaffActionTypes.CREATE_STAFF_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        case StaffActionTypes.EDIT_STAFF_SUCCESS: {
            const id = action.payload._id
            const oldStaffData = [...state.staffData]
            const staffToUpdate = oldStaffData.findIndex(data => data._id === id)
            oldStaffData[staffToUpdate] = action.payload;

            return {
                ...state,
                staffData: oldStaffData,
            }
        }

        case StaffActionTypes.EDIT_STAFF_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case StaffActionTypes.DELETE_STAFF_SUCCESS: {
            // AM - this doesn't work when there is only one piece of data... why???
            const staffId = action.payload
            return {
                ...state,
                staffData: state.staffData.filter(sd => sd._id !== staffId),
            }
        }

        case StaffActionTypes.DELETE_STAFF_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}


