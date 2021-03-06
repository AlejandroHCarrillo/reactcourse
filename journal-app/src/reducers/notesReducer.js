import { types } from "../types/types";

{/*
    notes:[]
    active: null 
            or 
            { 
                id:
                title:
                body:
                imageUrl
                date:
            }
*/}

const initialState = { 
    notes: [],
    active: null
};
export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return({
                ...state,
                active: {
                    ...action.payload
                }
            });

        case types.notesAddNew:
            return ({
                ...state,
                notes: [ action.payload, ...state.notes ]
            });


        case types.notesLoad:
            return ({
                ...state,
                notes: [ ...action.payload ]
            });

        case types.notesUpdated:
            return({
                ...state,
                notes: state.notes.map( n => n.id === action.payload.id
                                                ? action.payload.note
                                                : n
                )
            });

        case types.notesDelNote:
            return({
                ...state,
                active: null, 
                notes: state.notes.filter( n => n.id !== action.payload )
            });

        case types.notesLogoutClean:
            console.log('limpieza...');
            return ({
                ...state,
                active:null,
                notes: []
            });
    
        default:
            // console.log('[NotesReducer] No se pudo procesar esta accion: ', action );
            return state;
    }

} 