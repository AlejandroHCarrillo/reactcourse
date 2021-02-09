import { types } from "../types/types"

export const authReducer = ( state ={}, action )=>{
    // console.log("Action authReducer: ", action);
    switch (action.type) {
        case types.login: 
            return { 
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:
            return { }


        default:
            // console.log('[Auth reducer] No se pudo atender esta accion: ', action.type);
            return state;
    }
}