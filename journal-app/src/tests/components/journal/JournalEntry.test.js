import "@testing-library/jest-dom"
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const nota = {
    id: 10,
    title: "Titulo Nota",
    body: "Nota de pruebas",
    date: 0,
    url: 'https://dominio.com/imagen.jpg'
}

const wrapper = mount( 
        <Provider store={store}>
            <JournalEntry {...nota} /> 
        </Provider>
    );


describe('Pruebas en el componente JournalEntry', () => {
    
    test('should renderizarse el componente', () => {        
        expect(wrapper).toMatchSnapshot();        
    });

    test('should activar la nota', () => {

        wrapper.find('.journal__entry').prop('onClick')();

        // const activeNotexp = activeNote(1234, { ...nota });
        // console.log("activeNotexp: ", activeNotexp  );
        // console.log(                    { "payload": 
        //         {"body": "Nota de pruebas", 
        //         "date": 0, 
        //         "id": 10, 
        //         "title": 
        //         "Titulo Nota", 
        //         "url": "https://dominio.com/imagen.jpg"
        //     }, 
        //         "type": "[Notes] Set active note"
        //     }
        // );

        expect( store.dispatch ).toHaveBeenCalled();
        expect( store.dispatch ).toHaveBeenCalledTimes(1);
        expect( store.dispatch ).toHaveBeenLastCalledWith( activeNote(1234, { ...nota }) );
        // expect( store.dispatch ).toHaveBeenLastCalledWith(
        //     { "payload": 
        //         {
        //          "body": "Nota de pruebas", 
        //          "date": 0, 
        //          "id": 10, 
        //          "title": 
        //          "Titulo Nota", 
        //          "url": "https://dominio.com/imagen.jpg"
        //          }, 
        //         "type": "[Notes] Set active note"
        //     }
        //  );


        
        
    })
    
    
})
