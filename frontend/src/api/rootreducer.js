import * as actions from './actions'

export const initialState = {
    isLoading : false,
    user : {
        username : '',
        password : '',
        telephone : ''
    },
    plants : [],
    error : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //action cases
    }
} 