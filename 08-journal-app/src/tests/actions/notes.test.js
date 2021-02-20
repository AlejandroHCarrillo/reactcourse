import "@testing-library/jest-dom";
import moment from 'moment';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import { startLoadingNotes, startNewNote, startSavingNote, startUploading } from "../../actions/notes";
import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";

const urlExpected = 'https://dominio.com/imagen.jpg'
// Configuramos mock(s) para las funciones dentro del archivo 
jest.mock('../../helpers/fileUpload', ()=>({
    fileUpload: jest.fn( () => {
        return 'https://dominio.com/imagen.jpg';
        // return Promise.resolve('https://dominio.com/imagen.jpg');
    })
}));

/**
 * Configuracion del store para simular el state auth
 * 
 */
const noteDate = moment(new Date().getTime());

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: '6baQiEib0lpPlJxJeLFI',
            title: 'Image updated' + noteDate.format('Do MMM YYYY'),
            body: `La imagen ha sido actualizada el ${ noteDate.format('LLLL') }. `
        }
    }
};

// Simulamos el estado con un usuario autenticado
let store = mockStore( initState );

describe('Pruebas a notes', () => {

    beforeEach( ()=>{
        store = mockStore( initState );
    });

    const payload = {
        id: expect.any(String),
        title: '',
        body: '',
        date: expect.any(Number)
    };

    test('should de crear una nueva nota', async () => {
        await store.dispatch( startNewNote() );

        const actions = store.getActions();
        
        // console.log("Estas son las acciones del store 1: ", actions);

        // Al ejecutar startNewNote ejecuta 2 acciones
        // Evaluamos que la primer accion sea 
        // notesActive: '[Notes] Set active note'
        expect(actions[0]).toEqual( { 
            type: types.notesActive,
            payload: payload
        });
    
        // await cleanDocs(actions[0].payload.id);
        // Evaluamos que la segunda accion sea
        // notesAddNew: '[Notes] Add new note'
        expect(actions[1]).toEqual( { 
            type: types.notesAddNew,
            payload: payload
        });

        // Eliminamos la nota creada para la prueba
        await cleanDocs(actions[1].payload.id);

    });
    
    
});

test('startLoadingNotes should cargar las notas guardadas', async() => {

    // Limpiamos el store para tener solo las acciones relacionadas a este test
    store = mockStore( initState ); //El store no se esta limpiando en el beforeEach ni en el AfterEach.

    // Ejecutamos la accion de cargar las notas
    await store.dispatch( startLoadingNotes( 'TESTING' ) );

    const actions = store.getActions();

    // console.log("Estas son las acciones del store 2 ", actions);
    expect(actions[0]).toEqual( { 
        type: types.notesLoad,
        payload: expect.any(Array)
    });

    // creamos un objeto la estrucctura esperada
    const objExpected = {
        id: expect.any(String),
        title: expect.any(String),
        body: expect.any(String),
        date: expect.any(Number),
    };

    // Verificamos que el objeto obtenido contenga la estructura esperada.
    expect(actions[0].payload[0]).toMatchObject(objExpected);
});

test('should actualizar un Nota', async () => {
    // Limpiamos el store para tener solo las acciones relacionadas a este test
    store = mockStore( initState ); //El store no se esta limpiando en el beforeEach ni en el AfterEach.

    // console.log(noteDate);
    const note = {
        id: 'tV1akbEHn05IZpvFJWsM',
        title: 'Nota actualizada el ' + noteDate.format('Do MMM YYYY'),
        body: `Esta nota fue actualizada el ${ noteDate.format('LLLL')} 
               en la base de datos de pruebas 
               durante las pruebas unitarias`
    };

    // Ejecutamos la accion de guardar la nota
    await store.dispatch( startSavingNote(note) );

    // Obtenemos las acciones del store
    const actions = store.getActions();

    // console.log("actions: ", actions);

    //Revisamos que la accion sea del mismo tipo de la accion que invocamos
    expect( actions[0].type ).toBe( types.notesUpdated );

    // Consultamos la informacion guardad en la base de datos
    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

    // Verificamos que el titulo guardado sea el mismo de la nota que mandamos.
    expect(docRef.data().title).toBe( note.title);
    
});

test('startUploading should actualizar el url de la nota', async() => {
    // Al implementar esta prueba vamos a recibir este error
    // Error: Not implemented: window.scrollTo
    // Para superar este error hay que hacer una configracion en setupTests.js

    // Creamos un archivo vacio
    const file = new File([], 'foto.jpg');

    await store.dispatch( startUploading( file ) );

    // Obtenemos las acciones del store
    const actions = store.getActions();

    // console.log("actions: ", actions);

    // Consultamos la informacion guardad en la base de datos
    const docRef = await db.doc(`/TESTING/journal/notes/${ initState.notes.active.id}`).get();

    // Validamos que el url del documento guardado sea igual al url del objet enviado
    expect(docRef.data().url).toBe( urlExpected );
})




const cleanDocs = async (docId)=>{
    // Elimina el documento creado para la prueba
    // console.log(`Eliminando documento: ${docId}`);
    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
}

