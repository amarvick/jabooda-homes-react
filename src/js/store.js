/* File Name: store.js                                              *
 * Description: Applying Middleware, logger, thunk, reducers        */

import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers/reducers'

const middleware = applyMiddleware(promise(), thunkMiddleware, logger)

export default createStore(reducer, middleware)