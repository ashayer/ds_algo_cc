import * as api from '../api/index.js';
import * as actions from "../constants/actionTypes";


export const updatePoints = (id, points) => async (dispatch) => {
    try {
        
        const {data} = await api.updatePoints(id, points);
        dispatch({type:actions.UPDATE_POINTS, payload:data});

    } catch (error) {
        console.log(error);
    }
};


export const getPoints = (id) => async (dispatch) => {
    try {
        const {data} = await api.getPoints(id);
        
        dispatch({type:actions.FETCH_POINTS, payload:data});



    } catch (error) {
        console.log(error.message);
    }
};