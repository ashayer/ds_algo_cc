import {AUTH, LOGOUT, UPDATE_POINTS, FETCH_POINTS} from "../constants/actionTypes"

// eslint-disable-next-line import/no-anonymous-default-export

const authReducer = (state = {authDate: null, users:[]}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        case UPDATE_POINTS:
            return {...state, users: state.users.map((user) => user._id === action.payload._id ? action.payload : user)};
        case FETCH_POINTS:
            return {...state, user: action.payload};
        default:
            return state;
    }
}

export default authReducer;