import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async()=> { 
        console.log("email: ", email, "password: ", password);
    }
};