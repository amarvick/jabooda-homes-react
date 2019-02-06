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

        case UserActionTypes.CREATE_USER_SUCCESS: {
            return {...state,
                userData:  [...state.userData, action.payload],
            }
        }

        case UserActionTypes.CREATE_USER_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        case UserActionTypes.EDIT_USER_SUCCESS: {
            const id = action.payload._id
            const oldUserData = [...state.userData]
            const userToUpdate = oldUserData.findIndex(data => data._id === id)
            oldUserData[userToUpdate] = action.payload;

            return {
                ...state,
                userData: oldUserData,
            }
        }

        case UserActionTypes.EDIT_USER_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case UserActionTypes.DELETE_USER_SUCCESS: {
            const userId = action.payload
            return {
                ...state,
                userData: state.userData.filter(ud => ud._id !== userId),
            }
        }

        case UserActionTypes.DELETE_USER_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
