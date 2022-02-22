import * as api from '../api/index.js';
import * as actions from "../constants/actionTypes";



export const signin = (formData, navigate) => async (dispatch) => {    

    try {
        const {data} = await api.signin(formData);
        dispatch({type: actions.AUTH, data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }


}


export const signup = (formData, navigate) => async (dispatch) => {    

    try {
        const {data} = await api.signup(formData);
        dispatch({type: actions.AUTH, data});

        navigate('/');
    } catch (error) {
        console.log(error);
    }


}



