import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import AuthActionTypes from '../actiontypes/authActionTypes'

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('http://localhost:3001/api/users/register', userData)
        .then(res => {
            console.log('yeah')
            // AM - we want to display a modal here notifying the user that their registration request has been submitted.
        }) 
        .catch(err => {
            console.log(err)
            dispatch({
                type: AuthActionTypes.GET_ERRORS,
                payload: err.response.userData
            })
        })
}

export const validateNewUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/validate', userData)
        .then(res => {
            console.log(res)
        }) // AM - return a success, email amarvick94@gmail.com, then credentials will be verified
        .catch(err => {
            console.log(err)
            dispatch({
                type: AuthActionTypes.GET_ERRORS,
                payload: err.response.userData
            })
        })
}

// Login - Get User Token
export const loginUser = userData => dispatch => {
    axios
        .post('http://localhost:3001/api/users/login', userData)
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

        .catch(err => {
            console.log(err)
            dispatch({
                type: AuthActionTypes.GET_ERRORS,
                payload: err.response.data
            })
        })
}

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: AuthActionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}

// User loading
export const setUserLoading = () => {
    return {
        type: AuthActionTypes.USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');

    // Remove auth header for future requests
    setAuthToken(false)

    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
}