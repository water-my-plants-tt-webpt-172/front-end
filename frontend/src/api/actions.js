import authWithAxios from '../utils/authWithAxios'
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
    authWithAxios()
        .get('https://dont-let-it-die.herokuapp.com/plants/')
        .then(res =>
            dispatch({ type: PLANT_GET_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const addPlant = (plant) => dispatch => {
    dispatch({ type: API_ACTION_START });
    authWithAxios()
        .post('https://dont-let-it-die.herokuapp.com/plants/', plant)
        .then(res =>
            dispatch({ type: PLANT_UPDATE_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}));
}

export const editPlant = (plant) => dispatch => {
    dispatch({ type: API_ACTION_START });
    authWithAxios()
        .put(`https://dont-let-it-die.herokuapp.com/plants/${plant}`, plant)
        .then(res =>
            dispatch({ type: PLANT_UPDATE_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const deletePlant = (plant) => dispatch => {
    dispatch({ type: API_ACTION_START });
    authWithAxios()
        .delete(`https://dont-let-it-die.herokuapp.com/plants/${plant}`)
        .then(res =>
            dispatch({ type: PLANT_UPDATE_SUCCESS, payload: res.somePayloadPoint}))
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const userLogin = (loginInfo) => dispatch => {
    dispatch({ type: API_ACTION_START});
    axios
        .post('https://dont-let-it-die.herokuapp.com/auth/login', loginInfo)
        .then(res => {
            localStorage.setItem('token' , res.somePayloadPoint);
            dispatch({type: USER_LOGIN_SUCCESS})
        })
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const userSignUp = (signUpInfo) => dispatch => {
    dispatch({ type: API_ACTION_START });
    axios
        .post('https://dont-let-it-die.herokuapp.com/auth/register', signUpInfo)
        .then(res => {
            dispatch({type: USER_SIGN_SUCCESS, payload : res.somePayloadPoint})
        })
        .catch(err => dispatch({ type: API_ACTION_FAIL, payload: err}))
}

export const userEdit = (userEdit) => dispatch => {
    dispatch({ type: API_ACTION_START });
    authWithAxios()
        .patch(`https://dont-let-it-die.herokuapp.com/users/update/${userEdit.username}`, userEdit)
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

// DON'T LET IT DIE API
// Don't Let It Die API is an app that would let you keep track of your plants friends!
// Users can create an account and start adding the info of their green little friends, as many as they want! And keep track of how often they need to water each one of them.

// AUTHORIAZATION
// METHOD	URI	SEND	RECIVED
// POST	https://dont-let-it-die.herokuapp.com/auth/register	{username: STRING, password: STRING, phone: STRING}	{ data: { username: STRING, password: STRING, phone: STRING }, token: STRING }
// POST	https://dont-let-it-die.herokuapp.com/auth/login	{username: STRING, password: STRING }	{ data: { username: STRING, password: STRING, phone: STRING }, token: STRING }
// USERS
// METHOD	URI	SEND	RECIVED
// PATCH	https://dont-let-it-die.herokuapp.com/users/update	{id: INTEGER, [KEY]: STRING}	{username: STRING, password: STRING, phone: STRING }
// PLANTS
// METHOD	URI	SEND	RECIVED
// GET	https://dont-let-it-die.herokuapp.com/plants/	N/A	
// GET	https://dont-let-it-die.herokuapp.com/plants/:id	N/A	
// POST	https://dont-let-it-die.herokuapp.com/plants/	{nickname: STRING, species: STRING, h2oFrequency: STRING}	{ id: INTEGER, nickname: STRING, species: STRING, h2oFrequency: STRING}
// PUT	https://dont-let-it-die.herokuapp.com/plants/:id	{nickname: STRING, species: STRING, h2oFrequency: STRING}	{ id: INTEGER, nickname: STRING, species: STRING, h2oFrequency: STRING}
// DELETE	https://dont-let-it-die.herokuapp.com/plants/:id	N/A	N/A