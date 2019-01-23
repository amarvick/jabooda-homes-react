/* File Name: reducers.js                                                   *
 * Description: Combines all reducers together so they are all in a single  *
 * package                                                                  */

import { combineReducers } from 'redux'

import auth from './authReducer'
import career from './careerReducer'
import contactUs from './contactUsReducer'
import error from './errorReducer'
import project from './projectReducer'
import staff from './staffReducer'
import user from './userReducer'

export default combineReducers ({
    auth,
    career,
    contactUs,
    error,
    project,
    staff,
    user
})
