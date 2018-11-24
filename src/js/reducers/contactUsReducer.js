/* File Name: contactUsReducer.js                                   *
 * Description: Redux reducer for the artist                        */

import ContactUsActionType from '../actionTypes/contactUsActionType'

export default function reducer(state={
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    error: null
}, action) {

    switch(action.type) {
        case ArtistActionType.SEND_EMAIL_SUCCESS: {
            return {...state,
                submitted: true
            }
        }

        case ArtistActionType.SEND_EMAIL_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
