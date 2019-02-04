/* File Name: userReducer.js                                                *
 * Description: Redux reducer for the users                                 */

import UserActionTypes from '../actiontypes/userActionTypes'

export default function reducer(state={
    userData: [],
    userDataKeys: [
        'pending',
        'name',
        'email',
        'adminLevel'
    ],
    loading: false,
    error: null
}, action) {
    switch(action.type) {
        case UserActionTypes.FETCHING_USERS: {
            return {...state,
                loading: true
            }
        }

        case UserActionTypes.FETCH_USERS_SUCCESS: {
            return {...state,
                loading: false,
                userData: action.payload
            }
        }
        
        case UserActionTypes.FETCH_USERS_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
