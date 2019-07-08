import axios from 'axios';
import * as types from "./actionTypes";

export function fetch_users() {
    return {
        type: types.FETCH_USERS
    }
}

export function fetch_users_success(users) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export function fetch_users_failure(error) {
    return {
        type: types.FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => dispatch => {
    dispatch(fetch_users());
    axios.get('http://localhost:5000/api/users')
        .then(res => {
            dispatch(fetch_users_success(res.data))
        })
        .catch(err => {
            dispatch(fetch_users_failure(err.message))
        })
}

//get single user

export function fetch_user(id) {
    return {
        type: types.FETCH_SINGLE_USER,
        payload: id
    }
}

export function fetch_single_user_success(user) {
    return {
        type: types.FETCH_SINGLE_USER_SUCCESS,
        payload: user
    }
}

export function fetch_single_user_failure(error) {
    return {
        type: types.FETCH_SINGLE_USER_FAILURE,
        payload: error
    }
}

export const fetchSingleUser = (id) => dispatch => {
    dispatch(fetch_user());
    axios.get(`http://localhost:5000/api/users/${id}`)
        .then(res => {
            dispatch(fetch_single_user_success(res.data))
        })
        .catch(err => {
            dispatch(fetch_single_user_failure(err.message))
        })
}