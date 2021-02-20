import "@testing-library/jest-dom"
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Probando el authReducer', () => {

    const initialState = { };

    const usuarioPrueba = {
        uid: 'usuariodeprueba',
        displayName: "Este es un usuario de prueba"
    };

    const usuarioLogueado = {
        uid: 'usuariodeprueba',
        name: "Este es un usuario de prueba"
    };


    test('should de retornar un objeto con el nombre y el uid al loggeador un usuario', () => {
        const action = {
            type: types.login,
            payload: usuarioPrueba
        }

        const stateRet = authReducer( {}, action );
        // console.log("stateRet: ", stateRet);

        expect(stateRet).toEqual(usuarioLogueado);
    });

    test('should de regresar un objeto vacio al desloggear al usuario', () => {
        const action = {
            type: types.logout
        };
    
        const stateRet = authReducer( usuarioLogueado, action );
        expect(stateRet).toEqual({});
    });

    test('should de regresar el estado inicial al mandar una accion no reconocida', () => {
        const action = {
            type: "AccionNoImplementada",
            payload: usuarioPrueba
        };

        // const initialState = { uid: "no-action", name:"nochange" };

        const stateRet = authReducer( initialState, action );
        // console.log("stateRet: ", stateRet);

        expect(stateRet).toEqual(initialState);
        
    });
    

    
})
