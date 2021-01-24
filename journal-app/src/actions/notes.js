import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    // Como es una funcion asincrona regresamos un callback "() => {}"
    return async ( dispatch, getState ) => {
        // Con el getState obtenemos el estado del reducer en el store.js
        const uid = getState().auth.uid; 
        console.log("uid:", uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        // console.log(docRef);

        dispatch ( activeNote(docRef.id, newNote ));
    }
};

// Esta funcion no es asincrona 
// asi que podemos usar la version abreviada o corta del return 
export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
                id,
                ...note
            }
});

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        // Cargamos las notas
        const notes = await loadNotes( uid );

        // Ponemos las notas en el state
        dispatch( setNotes(notes) );
    };
};

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})
