import { types } from "../types/types";

const initialState = {
    checkin: true,
    // uid: null,
    // name: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.checkin:
            
            break;
    
        default:
            return state;
    }
}