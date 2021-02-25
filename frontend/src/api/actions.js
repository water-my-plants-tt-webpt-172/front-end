import axiosWithAuth from '../utils/authWithAxios'
import axios from 'axios'

export const PLANT_DATA_START = "PLANT_DATA_START";
export const PLANT_DATA_SUCCESS = "PLANT_DATA_SUCCESS";
export const PLANT_DATA_FAIL = "PLANT_DATA_FAIL";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const USER_SIGN_START = "USER_SIGN_START";
export const USER_SIGN_SUCCESS = "USER_SIGN_SUCCESS";
export const USER_SIGN_FAIL = "USER_SIGN_FAIL";

export const UPDATE_ERROR = "UPDATE_ERROR";

export const getPlants = () => dispatch => {
    dispatch({ type: PLANT_DATA_START });
    axiosWithAuth()
        .get(someURL)
        .then(res =>
            dispatch({ type: PLANT_DATA_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: PLANT_DATA_FAIL, payload: err}))
}

export const addPlant = (plant) => dispatch => {
    dispatch({ type: PLANT_DATA_START });
    axiosWithAuth()
        .get(someURL, plant)
        .then(res =>
            dispatch({ type: PLANT_DATA_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: PLANT_DATA_FAIL, payload: err}))
}

export const userLogin = (loginInfo) => dispatch => {
    dispatch({ type: USER_LOGIN_START});
    axios
        .post(someURL, loginInfo)
        .then(res => {
            dispatch({type: USER_LOGIN_SUCCESS, payload : res.somePayloadPoint})
        })
        .catch(err => dispatch({ type: USER_LOGIN_FAIL, payload: err}))
}

export const userSignUp = (signUpInfo) => dispatch => {
    dispatch({ type: USER_SIGN_START });
    axios
        .post(someURL, signUpInfo)
        .then(res => {
            dispatch({type: USER_SIGN_SUCCESS, payload : res.somePayloadPoint})
        })
        .catch(err => dispatch({ type: USER_SIGN_FAIL, payload: err}))
}

export const updateError = (error) => {
    return {
        type: "UPDATE_ERROR",
        payload: error
    }
}