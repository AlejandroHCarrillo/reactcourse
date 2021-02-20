import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Probar el authReducer', () => {
    const user = {
        name:"alejandro", 
        email: "a@a.com"
    };

    test('should regresar el estado por default al no mandar una accion', () => {
        // Llamanos el authReducer con un estado X, pero no mandamos ninguna accion
        // debemos recibir el mismo objeto que mandamos
        const state = authReducer( { logged:false }, { } );

        expect(state).toEqual({ logged:false });
    });

    test('should al autenticar debe regresar el usuario y el estado del usuario', () => {
        // Accion de loggear a un usuario
        const action = { 
            type:types.login,
            payload: user
        }

        const state = authReducer( user, action );
        // console.log("Estado regresado: ", state);        
        expect(state).toEqual( { ...user, logged: true } );
    });

    test('should debe eliminar el name del usuario y poner logged en falso', () => {
        // accion logout, con usuario loggeado
        const action = { 
            type:types.logout,
            payload: {...user, logged:true}
        }

        const state = authReducer( user, action );
        // console.log("Estado regresado: ", state);        
        expect(state).toEqual( { logged: false } );

    });
    
    
    
    
})
