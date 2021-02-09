import "@testing-library/jest-dom"
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginWithEmailAndPassword } from '../../../actions/auth';

// Ojo con el parentesis extra en la funcion () => {}
// para usar el metodo abreviado del return  () =>({})
jest.mock('../../../actions/auth', ()=>({
    startGoogleLogin: jest.fn(),
    startLoginWithEmailAndPassword: jest.fn()
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
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <MemoryRouter>
        <Provider store={store}>
            <LoginScreen /> 
        </Provider>
    </MemoryRouter>
    );

describe('Probando el componente LoginScreen', () => {

    beforeEach(()=>{
        // console.log('before each limpiar store');
        store = mockStore(initState);
        store.dispatch = jest.fn();
    });

    test('should de renderizar el componente ', () => {
        // Para hacer esta prueba hay que confirar
        // Provider de react-redux
        // El store usando configureStore de redux-mock-store
        // El thunk de redux-thunk
        // Y el Memory router
        expect( wrapper ).toMatchSnapshot();
    });

    test('should disparar la accion de authenficacion de google startGoogleLogin', () => {
        // const googleButton =  wrapper.find('.google-btn');        
        // googleButton.simulate('click');
        wrapper.find('.google-btn').prop('onClick')();        

        expect( startGoogleLogin ).toHaveBeenCalled();

    });
    
    test('should disparar la accion de autentificacion con email y password vacios', () => {
        wrapper.find('form').prop('onSubmit')(e);        

        expect( startLoginWithEmailAndPassword ).toHaveBeenCalledWith('', '');
        
    });

    
    
})
