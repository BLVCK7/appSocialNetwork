import React from "react";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

/* ActionCreators */

export const initializedSuccess = (id, email, login, isAuth) => ({type: INITIALIZED_SUCCESS})

/* ThunkCreators */

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all ([promise])
        .then(() => {
        dispatch(initializedSuccess());
    })
}


export default appReducer;