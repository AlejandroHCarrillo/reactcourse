import "@testing-library/jest-dom"
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { startLoginWithEmailAndPassword } from "../../../actions/auth";
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        loading: true,
        msgError: null
    }
};

const e = {
    preventDefault: jest.fn()
};

let store = mockStore(initState);

// store.dispatch = jest.fn();

const wrapper = mount( 
    <MemoryRouter>
        <Provider store={store}>
            <RegisterScreen /> 
        </Provider>
    </MemoryRouter>
    );

    describe('Probando el componente LoginScreen', () => {

        // beforeEach(()=>{
        //     // console.log('before each limpiar store');
        //     store = mockStore(initState);
        //     store.dispatch = jest.fn();
        // });
    
        test('should de renderizar el componente ', () => {
            // Para hacer esta prueba hay que confirar
            // Provider de react-redux
            // El store usando configureStore de redux-mock-store
            // El thunk de redux-thunk
            // Y el Memory router
            expect( wrapper ).toMatchSnapshot();
        });

        test('should de lanzar la accion de registro con el email vacio', () => {
            const txtEmail = wrapper.find('input[name="email"]');
            
            txtEmail.simulate("change", {
                target: {
                    name: 'email',
                    value:''
                }
            });

            wrapper.find('form').prop('onSubmit')(e);
        
            // console.log(wrapper.html() );

            const actions = store.getActions();        
            // console.log("Actions: ", actions);

            expect(actions[0]).toEqual({ 
                                        type: types.uiSetError,
                                        payload: 'El correo eletronico no es valido'
                                    });
        });

        test('should mostrar el mensaje de error', () => {
            // Fingimos que hay un error en el estado inicial
            const initState = {
                auth: {},
                ui: {
                    loading: false,
                    msgError: 'El email es requerido o no es correcto'
                }
            };

            const store = mockStore(initState);

            const wrapper = mount( 
                <MemoryRouter>
                    <Provider store={store}>
                        <RegisterScreen /> 
                    </Provider>
                </MemoryRouter>
                );

            // console.log(wrapper.find('.auth__alert-error').html() );
            
            expect(wrapper.find('.auth__alert-error').exists() ).toBeTruthy();
            expect(wrapper.find('.auth__alert-error').text().trim() ).toBe( initState.ui.msgError );
        });
        
        

    });    
