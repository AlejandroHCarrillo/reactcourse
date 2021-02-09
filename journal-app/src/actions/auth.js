import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailAndPassword = (email, password) =>{
    // Esto regresa un callback
    return (dispatch) => {

        dispatch( startLoading() );

        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({ user }) => {
            // console.log(user);
            dispatch( login(user.uid, user.displayName) );
        
            dispatch( finishLoading() );
        }).catch( e => {
            console.log(e);
            dispatch( finishLoading() );
            Swal.fire('Error de autentificacion', e.message, 'error' );
        });
    };
}

export const startRegisterWithEmailAndPassword = (email, password, name) =>{
    // Esto regresa un callback
    return ( dispatch ) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({ user }) => {
            await user.updateProfile( {profileName: name });
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            );
        }).catch( e => {
            Swal.fire('Error registrando al usario', e.message, 'error' );
            console.log(e);
        });
    } 
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({ user }) => {
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            );
        });
    };
};

export const login = (uid, displayName)=> ({
        type: types.login,
        payload: { 
            uid, 
            displayName }
    });

// forma larga del metodo anterior, el return esta implicito
// export const login = (uid, displayName)=> {
    //     return({
    //         type: types.login,
    //         payload: { 
    //             uid, 
    //             displayName }
    //     });
    
    // }

export const startLogout = () => {
    // llamamos asincronamente la fincion del sing out de firebase
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch( logout() );
        dispatch( logoutCleaning());
    }
};

export const logout = () => ({
    type: types.logout
});

export const logoutCleaning = () => ({
    type: types.notesLogoutClean
});