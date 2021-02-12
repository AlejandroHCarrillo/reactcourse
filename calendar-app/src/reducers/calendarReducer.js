import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Evento Guardado',
        start: moment('2021-02-04').toDate(),
        end: moment('2021-02-04').add(2, 'hours').toDate(),
        bgcolor: '#fa0023', 
        notes: 'Evento guardado en el store',
        user: {
            id: '123',
            name: 'Jhon Kmaney'
        }
    }],
    activeEvent: null,
    currentEventDate: new Date().getTime()
};

export const calendarReducer = ( state = initialState, action ) => {
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
    

        default:
            return state;
    }

};