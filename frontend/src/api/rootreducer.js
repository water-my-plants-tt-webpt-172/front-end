import * as actions from './actions'


export const initialState = {
    isLoading: false,
    user: {
        username: '',
        password: '',
        phone: ''
    },
    plants: [],
    error: '',
    success: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.API_ACTION_START:
            return {
                ...state,
                isLoading: true,
                error: '',
                success: ''
            };
        case actions.API_ACTION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actions.PLANT_GET_SUCCESS:
            return {
                ...state,
                plants: action.payload,
                isLoading: false,
                error: ''
            };
        case actions.PLANT_UPDATE_SUCCESS:
            actions.getPlants();
            return {
                ...state,
                isLoading: false,
                success: action.payload,
                error: ''
            };
        case actions.USER_LOGIN_SUCCESS:
            return {
                ...state,
                password: '',
                isLoading: false,
                error: '',
                success: 'Login Successful'
            }
        case actions.USER_SIGN_SUCCESS:
            //Maybe have it auto sign in users after sign up
            return {
                ...state,
                isLoading: false,
                username: '',
                password: '',
                error: '',
                success: 'User Registered'
            }
        default:
            return state;
    }
}

export default reducer;