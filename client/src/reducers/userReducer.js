import {UPDATE_POINTS, FETCH_POINTS} from "../constants/actionTypes"

// eslint-disable-next-line import/no-anonymous-default-export

const userReducer = (user = {}, action) => {
    switch (action.type) {
        case UPDATE_POINTS:
            return action.payload;
        case FETCH_POINTS:
            return action.payload;
        default:
            return user;
    }
}

export default userReducer;