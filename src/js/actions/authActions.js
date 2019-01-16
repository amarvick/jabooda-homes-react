import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from '../actiontypes/authActionTypes'

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/')) // AM - redirect to home on successful register... may make a page saying 'An email has been sent to the head admin, who will approve your request if you are an employee'
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Login - Get User Token
export const loginUser = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.data
            localStorage.setItem("jwtToken", token)
            // set Token to Auth header
            setAuthToken(token)
            // Decode token to get user data
            const decoded = jwt_decode(token)
            // Set current user
            dispatch(setCurrentUser(decoded))
        })

        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false)
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
}