import * as types from '../actions/actionTypes';

const initialState = {
    usersList: {
        allUsers: [],
        loading: false,
        error: null
    },
    activeUser: {
        user: null,
        error: null,
        loading: false
    },
}

export const userReducer = (state = initialState,  action) => {
    let error;
    switch (action.type) {
        case (types.FETCH_USERS):
            return {
                ...state,
                usersList: {
                    allUsers: [],
                    error: null,
                    loading: true
                }
            }   
            case (types.FETCH_USERS_SUCCESS):
                return {
                    ...state,
                    usersList: {
                        allUsers: action.payload,
                        error: null,
                        loading: false
                    }
                }
            case (types.FETCH_USERS_FAILURE):
                error = action.payload || { message: action.payload.message };
                return {
                    ...state,
                    usersList: {
                        allUsers: [],
                        error: error,
                        loading: false
                    }
                }
        default:
            return state;
    }
}

export default userReducer;