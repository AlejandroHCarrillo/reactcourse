import { types } from "../types/types";

const initialState = {
    checking: true,
    // uid: null,
    // name: null,
    showRegister: false
}

export const authReducer = (state = initialState, action) => {
    // console.log("Auth reducer ", action.type, action.payload );
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload, 
                checking: false
            };
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            };
        case types.authShowRegister:
                return {
                    ...state,
                    showRegister: true
                };

        case types.authHideRegister:
                return {
                    ...state,
                    showRegister: false
                };

        case types.authLogout:
            return { checking: false };
        default:
            return state;
    }
}