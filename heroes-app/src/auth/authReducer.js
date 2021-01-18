import { types } from "../types/types";

export const authReducer = ( state = {}, action) => {

    // const state = { 
    //     name: '',
    //     logged: true
    // };
    console.log("Entrado al auth reducer: ", state);
    switch (action.type) {
        case types.login:
            return{
                ...action.payload,
                logged: true
            }
            
        case types.logout:
            return{
                logged: false
            }
        default:
            return state;
    }
}