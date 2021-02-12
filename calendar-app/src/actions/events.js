import { types } from "../types/types";

export const eventSetActive = ( event ) => ({ 
    type: types.eventSetActive,  
    payload: event
});

export const eventAddNew = ( event ) => ({ 
    type: types.eventAddNew, 
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdate = ( event ) => ({ 
    type: types.eventUpdate,  
    payload: event
});

export const eventDelete = () => ({  type: types.eventDelete });

export const setCurrentStartDate = ( date ) => ({  
    type: types.eventSetCurrentStartDate,
    payload: date
});