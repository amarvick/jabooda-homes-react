/* File Name: reducers.js                                                   *
 * Description: Combines all reducers together so they are all in a single  *
 * package                                                                  */

import { combineReducers } from 'redux'

import admin from './adminReducer'
import career from './careerReducer'
import contactUs from './contactUsReducer'
import project from './projectReducer'
import staff from './staffReducer'

export default combineReducers ({
    admin,
    career,
    contactUs,
    project,
    staff
})
