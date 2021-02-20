import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { fetchSimple, fetchToken } from "../helpers/fetch";
import { types } from "../types/types";
import { eventLogout } from "./events";

export const startLogin = (email, password) => {
    return async(dispatch)=> { 
        console.log("starting login with email: ", email, "password: ", password);
        
        const resp = await fetchSimple("auth", { email, password }, 'POST' );
        const body = await resp.json();

        console.log(body);

        if( body.ok ){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );
        } else{
            Swal.fire('Error', body.msg, 'error')
        }

    }
};

export const startRegister = (name, email, password) => {
    return async(dispatch)=> { 
        console.log("starting register with email: ", email, "password: ", password);
        
        const resp = await fetchSimple("auth/new", { name, email, password }, 'POST' );
        const body = await resp.json();

        console.log(body);

        if( body.ok ){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            // Al terminar de registrarme loggearme
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );
            // Swal.fire('Usuario registrado', "El usuario se ha registrado con exito", 'success')
        } else{
            Swal.fire('Error(s)', body.msg, 'error')
        }

    }
};

export const startChecking = () => {
    return async( dispatch ) => {
        const resp = await fetchToken("auth/renew", 'GET' );
        const body = await resp.json();

        if( body.ok ){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );
        } else{
            dispatch( checkingFinish() );
        }
    }
}

export const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    console.log("startLogout...");
    return ( dispatch ) =>{
        localStorage.clear();
        dispatch ( eventLogout() );
        dispatch ( logout() );
    }
}

const logout = () => ({ type: types.authLogout });

export const showRegisterScreen = () => ({ 
    type: types.authShowRegister
});

export const hideRegisterScreen = () => ({ 
    type: types.authHideRegister
});
