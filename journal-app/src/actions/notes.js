import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    // Como es una funcion asincrona regresamos un callback "() => {}"
    return async ( dispatch, getState ) => {
        // Con el getState obtenemos el estado del reducer en el store.js
        const { uid } = getState().auth; 
        // console.log("uid:", uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        // console.log(docRef);

        dispatch ( activeNote( docRef.id, newNote ));
        dispatch ( addNewNote( docRef.id, newNote ));
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

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
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
});

export const startSavingNote = ( note ) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth; 

        // Eliminamos la propiedad url del objeto Si es nula 
        if (!note.url){
            console.log("eliminamos el url si viene vacio");
            delete note.url
        };

        await db.doc(`${uid}/journal/notes/${note.id}`).update(note);

        // console.log(note);
        dispatch( refreshNote(note.id, note));

    }
};

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {id, ...note}
    }

});

// export const refreshNote = (id, note) => {
//     console.log("id: ", id);
//     console.log("note: ", note);
//     const action = {
//         type: types.notesUpdated,
//         payload: {
//             id, 
//             note: {id, ...note}
//         }
//         }
    
//     console.log("action ===>: ", action);
//     return(action);
// }

export const startUploading = ( file ) => {
    return async (dispatch, getState) => {
        const { active : noteActive } = getState().notes;

        Swal.fire({
            title: 'Cargando imagen...', 
            text: 'Por favor espere', 
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            }
        });
        const fileUrl = await fileUpload(file);

        noteActive.url = fileUrl;
 
        // console.log("activeNote: ", activeNote);

        dispatch( startSavingNote( noteActive ) );
        // dispatch ( activeNote( noteActive.id, noteActive ));

        Swal.close();

    }
};

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const uid  = getState().auth.uid; 
        const deteleUrl = `${uid}/journal/notes/${id}`;

        await db.doc(deteleUrl).delete();

        dispatch( deleteNote( id ) );
    }

};

export const deleteNote = (id)=>({
    type: types.notesDelNote,
    payload: id
});

export const notesLogoutClean = () => ({
    type: types.notesLogoutClean
});
