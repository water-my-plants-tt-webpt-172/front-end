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
    success: '',
    madeChange: false,
    isWatered: ''
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
                error: action.payload,
                madeChange: false,
            };
        case actions.PLANT_GET_SUCCESS:
            return {
                ...state,
                plants: action.payload,
                isLoading: false,
                error: '',
                madeChange: false
            };
        case actions.PLANT_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: action.payload,
                error: '',
                madeChange: true
            };
        case actions.USER_LOGIN_SUCCESS:
            return {
                ...state,
                password: '',
                isLoading: false,
                error: '',
                success: 'Login Successful',
                madeChange: true
            }
        case actions.USER_SIGN_SUCCESS:
            //Maybe have it auto sign in users after sign up
            return {
                ...state,
                isLoading: false,
                username: '',
                password: '',
                error: '',
                success: 'User Registered',
                madeChange: true
            }
        case actions.UPDATE_ISWATERED:
            return {
                ...state,
                isWatered : action.payload,
            }
        default:
            return state;
    }
}

export default reducer;