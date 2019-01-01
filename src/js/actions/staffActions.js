/* File Name: careerActions.js                                      *
 * Description: Retrieves the user's top artists, then immediately  *
 *              calls to get that artist's top songs.               */

import StaffActionTypes from '../actiontypes/staffActionTypes'
import axios from 'axios'

export function loadData() {
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