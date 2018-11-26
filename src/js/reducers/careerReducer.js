/* File Name: careerReducer.js                                      *
 * Description: Redux reducer for the artist                        */

import CareerActionTypes from '../actiontypes/careerActionTypes'
import CareerData from '../../data/careers.json'

export default function reducer(state={
    careerData: CareerData,
    // description: '',
    // requirements: [],
    // header: '',
    arrowFATag: 'fa fa-arrow-circle-down fa-2x',
    height: 0,
    openAppModal: false,
    submitted: false,
    error: null
}, action) {
    switch(action.type) {
        case CareerActionTypes.FETCH_CAREERS_SUCCESS: {
            return {...state,
                submitted: true
            }
        }
        
        case CareerActionTypes.FETCH_CAREERS_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        case CareerActionTypes.TOGGLE_DESCRIPTION: {
            return {...state,
                submitted: true
            }
        }

        case CareerActionTypes.HANDLE_OPEN_APP_MODAL: {
            return {...state,
                openAppModal: true
            }
        }

        case CareerActionTypes.HANDLE_CLOSE_APP_MODAL: {
            return {...state,
                openAppModal: false
            }
        }

        case CareerActionTypes.SEND_APPLICATION_SUCCESS: {
            return {...state,
                submitted: true
            }
        }

        case CareerActionTypes.SEND_APPLICATION_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        default: {}
    }
    return state
}
