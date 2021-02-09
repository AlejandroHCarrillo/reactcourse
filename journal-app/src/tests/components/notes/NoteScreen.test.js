import "@testing-library/jest-dom"
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";
import { types } from "../../../types/types";

// Ojo con el parentesis extra en la funcion () => {}
// para usar el metodo abreviado del return  () =>({})
jest.mock('../../../actions/notes', ()=>({
    activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: '1234',
        name: "usuarioPrueba"
    },
    ui: {
        loading: true,
        msgError: null
    }, 
    notes: {
        notes: [],
        active: {
            id: "8797idnotaactiva8787",
            title: "Titulo de prueba",
            body: "Esta es una nota de prueba",
            date: 0
        }
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
        <Provider store={store}>
            <NoteScreen /> 
        </Provider>
    );


describe('Pruebas en el componente NoteScreen', () => {
    
    test('should renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should disparar el active note', () => {
        // wrapper.find('input[name="title"]').prop("onChange")( { 
        //                                                 target: { 
        //                                                     name: "title", 
        //                                                     value: "titulo cambiado" 
        //                                                 } } );

        wrapper.find('input[name="title"]').simulate('change', { 
                                                    target: { 
                                                        name: "title", 
                                                        value: "titulo cambiado" 
                                                    } } );

        // const actions = store.getActions();
        // console.log("actions: ", actions);

        expect( activeNote ).toHaveBeenLastCalledWith( "1234", { id:"8797idnotaactiva8787", title: 'titulo cambiado', body: 'Esta es una nota de prueba', date: expect.any(Number) } );

    });
    
    
})
