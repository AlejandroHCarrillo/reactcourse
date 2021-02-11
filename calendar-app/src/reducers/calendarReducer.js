import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        title: 'Mi cumpleaños',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fa0023', 
        notes: 'Comprar el regalo para mi',
        user: {
            _id: '123',
            name: 'Jhon Kmaney'
        }
    }],
    activeEvent: null
};

const newEvent = {
    title: '',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    notes: '',
    user: {
        _id: '123',
        name: 'Jhon Kmaney'
    }
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
                events: [newEvent, ...state.events]
            };
        default:
            return state;
    }

};