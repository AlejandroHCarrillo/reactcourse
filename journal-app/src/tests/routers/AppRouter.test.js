import "@testing-library/jest-dom"
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { act } from "react-dom/test-utils";
import { firebase } from "../../firebase/firebase-config"

// Ojo con el parentesis extra en la funcion () => {}
// para usar el metodo abreviado del return  () =>({})
jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}));
// Esta es la forma larga usando return del objeto
// jest.mock('../../../actions/auth', ()=> {
//     return { startGoogleLogin: jest.fn() }
// });

const e = {
    preventDefault: jest.fn()
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        loading: true,
        msgError: null
    }, 
    notes: {
        notes: [],
        active: {
            id: "8797idnotaactiva8787"
        }
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const username = "user@testing.com";
const pass = "paswordpruebas";
const uid = "u8OY63zKc2PkpZ1XWXV7nSfnB8o1";

let user;

describe('Pruebas al router AppRouter', () => {
    
    test('should de llamar el login si estoy autenticado', async() => {
        
        await act(async ()=>{
            // Obtenemos las credenciales de firabase
            const userCred = await firebase.auth().signInWithEmailAndPassword(username, pass);
            // Obtenemos la info del usuario
            user = userCred.user;

            // console.log("user: ", user);

            const wrapper = mount( 
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                </Provider>
            );
        });

        expect( login ).toHaveBeenCalledWith(uid, null);
    })
    
})
