import "@testing-library/jest-dom";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { login, logout, startLoginWithEmailAndPassword, startLogout } from '../../actions/auth';
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore();

describe('Probando las acciones de Auth', () => {

    beforeEach(()=>{
        // console.log('before each limpiar store');
        store = mockStore();
    });
    
    const user = { 
        uid: 'idpruebas', 
        displayName: 'Este es un usuario de pruebas' 
    }

    test('Login and Logout should de crear las acciones respectivas', async () => {
        const actionExp =  {
            type: types.login,
            payload: user 
        }
    
        const loginResp = login( user.uid, user.displayName );
        const logoutResp = logout();
        // console.log(actions);

        expect(loginResp.type).toBe(types.login);
        expect(loginResp).toMatchObject(actionExp);

        // const actions = store.getActions();

        // console.log("logout actions: ", actions);

        expect(logoutResp.type).toBe( types.logout);
        expect(logoutResp).toMatchObject( { type: types.logout } );
    });
    
    test('should de realizar las acciones login y logout', async () => {        
        const actionExp =  {
            type: types.login,
            payload: user 
        }
    
        await store.dispatch( login( user.uid, user.displayName ) );
        await store.dispatch( logout() );
        const actions = store.getActions();
        
        //console.log(actions);

        expect(actions[0].type).toBe(types.login);
        expect(actions[0]).toMatchObject(actionExp);

        // const actions = store.getActions();

        // console.log("logout actions: ", actions);

        expect(actions[1].type).toBe(types.logout);
        expect(actions[1]).toMatchObject( { type: types.logout } );

    });

    test('should de realizar las acciones login y logout', async () => {
        const actionExp =  {
            type: types.login,
            payload: user 
        }
    
        await store.dispatch( login( user.uid, user.displayName ) );
        await store.dispatch( logout() );
        const actions = store.getActions();
        
        //console.log(actions);

        expect(actions[0].type).toBe(types.login);
        expect(actions[0]).toMatchObject(actionExp);

        // const actions = store.getActions();

        // console.log("logout actions: ", actions);

        expect(actions[1].type).toBe(types.logout);
        expect(actions[1]).toMatchObject( { type: types.logout } );

    });

    test('should iniciar el logout (startLogout)', async () => {
        await store.dispatch( startLogout() );
        const actions = store.getActions();
        
        // console.log("startLogout: ", actions);

        expect(actions[0].type).toBe(types.logout);
        expect(actions[0]).toMatchObject({ type: types.logout });

        // const actions = store.getActions();
        expect(actions[1].type).toBe(types.notesLogoutClean);
        expect(actions[1]).toMatchObject( { type: types.notesLogoutClean } );
    });

    test('should funcionar el startLoginWithEmailAndPassword', async () => {
        const username = "user@testing.com";
        const pass = "paswordpruebas";
        await store.dispatch( startLoginWithEmailAndPassword(username, pass ) );
        const actions = store.getActions();
        
        // console.log(`startLoginWithEmailAndPassword username: ${username} pass: ${pass}`, actions);

        // verificamos que la segunda accion sea el login
        expect(actions[1].type).toBe(types.login);
        // verificamos que regrese el uid del usuario que acabamos de loggear
        expect(actions[1].payload.uid ).toBe( 'u8OY63zKc2PkpZ1XWXV7nSfnB8o1' );

        // verificamos toda la accion
        expect(actions[1] ).toMatchObject( {
            type: '[Auth] Login',
            payload: { uid: 'u8OY63zKc2PkpZ1XWXV7nSfnB8o1', displayName: null }
          } );
    })
    
    

    
    
})
