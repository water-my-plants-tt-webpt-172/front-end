import axiosWithAuth from '../utils/authWithAxios'
import axios from 'axios'

export const API_ACTION_START = "API_ACTION_START"
export const API_ACTION_FAIL = "API_ACTION_FAIL"
export const PLANT_GET_SUCCESS = "PLANT_DATA_SUCCESS";
export const PLANT_UPDATE_SUCCESS = "PLANT_UPDATE_SUCCESS";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_SIGN_SUCCESS = "USER_SIGN_SUCCESS";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const getPlants = () => dispatch => {
    dispatch({ type: API_ACTION_START });
    axiosWithAuth()
        .get(someURL)
        .then(res =>
            dispatch({ type: PLANT_GET_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const addPlant = (plant) => dispatch => {
    dispatch({ type: API_ACTION_START });
    axiosWithAuth()
        .post(someURL, plant)
        .then(res =>
            dispatch({ type: PLANT_UPDATE_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const editPlant = (plant) => dispatch => {
    dispatch({ type: API_ACTION_START });
    axiosWithAuth()
        .put(someURL/plant.id, plant)
        .then(res =>
            dispatch({ type: PLANT_UPDATE_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const deletePlant = (plant) => dispatch => {
    dispatch({ type: API_ACTION_START });
    axiosWithAuth()
        .delete(someURL, plant)
        .then(res =>
            dispatch({ type: PLANT_DATA_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const userLogin = (loginInfo) => dispatch => {
    dispatch({ type: API_ACTION_START});
    axios
        .post(someURL, loginInfo)
        .then(res => {
            localStorage.setItem('token' , res.somePayloadPoint);
            dispatch({type: USER_LOGIN_SUCCESS})
        })
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const userSignUp = (signUpInfo) => dispatch => {
    dispatch({ type: API_ACTION_START });
    axios
        .post(someURL, signUpInfo)
        .then(res => {
            dispatch({type: USER_SIGN_SUCCESS, payload : res.somePayloadPoint})
        })
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const userEdit = (userEdit) => dispatch => {
    dispatch({ type: API_ACTION_START });
    authWithAxios()
        .put(someURL/userEdit.username, userEdit)
        .then(res => {
            dispatch({type: USER_SIGN_SUCCESS, payload : res.somePayloadPoint})
        })
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}


export const updateError = (error) => {
    return {
        type: "UPDATE_ERROR",
        payload: error
    }
}