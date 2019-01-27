/* File Name: staffActions.js                                               *
 * Description: Retrieves all staff members                                 */

import StaffActionTypes from '../actiontypes/staffActionTypes'

export function loadStaffData() {
    return function action(dispatch) {
        dispatch({
            type: StaffActionTypes.FETCHING_STAFF
        })

        fetch("/api/getStaffData")
            .then(data => data.json())
            .then(res => 
                dispatch({
                    type: StaffActionTypes.FETCH_STAFF_SUCCESS,
                    payload: res.data
                })
            ) 
    
            // AM - make this in to an error screen?
            .catch(function(error) {
                dispatch({
                    type: StaffActionTypes.FETCH_STAFF_ERROR,
                    payload: error
                })
            })
    }
}