import "@testing-library/jest-dom"
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { Sidebar } from "../../../components/journal/Sidebar";
import { logout, startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

// Ojo con el parentesis extra en la funcion () => {}
// para usar el metodo abreviado del return  () =>({})
jest.mock('../../../actions/auth', ()=>({
    startLogout: jest.fn(),
}));
jest.mock('../../../actions/notes', ()=>({
    startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: '1',
        name: "usuarioPrueba"
    },
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

const wrapper = mount( 
        <Provider store={store}>
            <Sidebar /> 
        </Provider>
    );


describe('Pruebas en el componente Sidebar ', () => {
    test('should renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should llamar al startLogout', () => {
        // Disparamos la accion del botton logout
        wrapper.find('button').prop('onClick')();
        // Verificamos que se halla llamado el startLogout
        expect( startLogout ).toHaveBeenCalledWith();

    })

    test('should llamar el start newNote', () => {
        // Disparamos el click de la nota nueva
        wrapper.find('.journal__new-entry').prop('onClick')();

        // Verificamos que se halla llamado el startNewNote
        expect( startNewNote ).toHaveBeenCalledWith();
    })
    
    
    
})
