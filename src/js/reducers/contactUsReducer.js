/* File Name: contactUsReducer.js                                           *
 * Description: Redux reducer for sending emails                            */

import ContactUsActionType from '../actiontypes/contactUsActionTypes'

export default function reducer(state={
    submitted: false,
    error: null
}, action) {

    switch(action.type) {
        case ContactUsActionType.SEND_EMAIL_SUCCESS: {
            return {...state,
                submitted: true
            }
        }

        case ContactUsActionType.SEND_EMAIL_ERROR: {
            return {...state,
                error: action.payload
            }
        }
    }
    return state
}
