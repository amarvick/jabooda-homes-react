/* File Name: careerReducer.js                                              *
 * Description: Redux reducer for the careers                               */

import CareerActionTypes from '../actiontypes/careerActionTypes'
import CareerData from '../../data/careers.json'

export default function reducer(state={
    careerData: CareerData,
    careerDataKeys: [
        'jobtitle',
        'description',
        'requirements'
    ],
    loading: false,
    submitted: false,
    error: null
}, action) {
    switch(action.type) {
        case CareerActionTypes.FETCHING_CAREERS: {
            return {...state,
                loading: true
            }
        }

        case CareerActionTypes.FETCH_CAREERS_SUCCESS: {
            return {...state,
                loading: false,
                careerData: action.payload
            }
        }
        
        case CareerActionTypes.FETCH_CAREERS_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case CareerActionTypes.CREATE_CAREER_SUCCESS: {
            return {...state,
                careerData:  [...state.careerData, action.payload],
            }
        }

        case CareerActionTypes.CREATE_CAREER_ERROR: {
            return {...state,
                error: action.payload
            }
        }

        case CareerActionTypes.EDIT_CAREER_SUCCESS: {
            const id = action.payload._id
            const oldCareerData = [...state.careerData]
            const careerToUpdate = oldCareerData.findIndex(data => data._id === id)
            oldCareerData[careerToUpdate] = action.payload;

            return {
                ...state,
                careerData: oldCareerData,
            }
        }

        case CareerActionTypes.EDIT_CAREER_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
            }
        }

        case CareerActionTypes.DELETE_CAREER_SUCCESS: {
            const careerId = action.payload
            return {
                ...state,
                careerData: state.careerData.filter(cd => cd._id !== careerId),
            }
        }

        case CareerActionTypes.DELETE_CAREER_ERROR: {
            return {...state,
                loading: false,
                error: action.payload
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
