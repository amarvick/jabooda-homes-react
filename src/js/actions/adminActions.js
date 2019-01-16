/* File Name: adminActions.js                                               *
 * Description: Redux actions for the projects                              */

import AdminActionTypes from '../actiontypes/adminActionTypes'

export function validateLogin() {
    return function action(dispatch) {
        dispatch({ type: AdminActionTypes.FETCHING_ADMIN })

        fetch("/api/users/login")
            .then(data => data.json())
            .then(function(response) {
                dispatch({
                    type: AdminActionTypes.FETCH_ADMIN_SUCCESS,
                    payload: response.data
                })
            })
    
            .catch(function(error) {
                dispatch({
                    type: AdminActionTypes.FETCH_ADMIN_ERROR,
                    payload: error
                })
            })

    }
}