import moment from 'moment';
import { types } from '../types/types';
// {
//     id: new Date().getTime(),
//     title: 'Evento Guardado',
//     start: moment('2021-02-04').toDate(),
//     end: moment('2021-02-04').add(2, 'hours').toDate(),
//     bgcolor: '#fa0023', 
//     notes: 'Evento guardado en el store',
//     user: {
//         id: '123',
//         name: 'Jhon Kmaney'
//     }
// }

const initialState = {
    events: [],
    activeEvent: null,
    currentEventDate: new Date().getTime()
};

export const calendarReducer = ( state = initialState, action ) => {
    // console.log("Calendar reducer ", action.type, action.payload );
    switch ( action.type ) {
        case types.eventSetActive :
            return {
                ...state,
                activeEvent: action.payload 
            };
        case types.eventAddNew: 
            return {
                ...state,
                events: [
                    ...state.events, 
                    action.payload 
                ]
            };

        case types.eventClearActiveEvent :
            return {
                ...state,
                activeEvent: null 
            };

        case types.eventSetCurrentStartDate:
                return {
                    ...state,
                    currentEventDate: action.payload 
                };
    
        case types.eventUpdate :
            return {
                ...state,
                events: state.events.map( e => ( e.id === action.payload.id ) ? action.payload : e ) 
            };

        case types.eventDelete :
            return {
                ...state,
                events: state.events.filter( e => ( e.id !== state.activeEvent.id ) ),
                activeEvent: null
            };
        case types.eventLogout :
            return {
                events: [],
                activeEvent: null
            }
        case types.eventLoaded :
            return {
                ...state,
                events: [...action.payload ]
            };

        default:
            return state;
    }

};