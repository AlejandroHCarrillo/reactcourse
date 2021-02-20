import { fetchSimple, fetchToken } from "../helpers/fetch";
import { types } from "../types/types";
import { processEvents } from "../helpers/processEvents"
import Swal from "sweetalert2";

export const eventSetActive = ( event ) => ({ 
    type: types.eventSetActive,  
    payload: event
});

export const eventStartAddNew = ( event ) => {

    return async (dispatch, getState) => {
        const { uid, name } = getState().auth;
        try{

            const resp = await fetchToken('events', event, 'POST');
            const body = await resp.json();
            
            if(body.ok){
                event.id = body.evento.id;
                event.user = {
                    uid: uid,
                    name
                }

                dispatch( eventAddNew( event ))
            }
        } catch (error){
            console.log(error);
        }
    }
}

const eventAddNew = ( event ) => ({ 
    type: types.eventAddNew, 
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventStartUpdate = ( event ) => {
    // console.log("updating ", event);
    return async ( dispatch ) =>{
        try {
            const resp = await fetchToken(`events/${event.id}`, event, 'PUT');
            // console.log(resp);
            const body = await resp.json();
            // console.log(body);
            
            if(body.ok){
                dispatch( eventUpdate(event) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
     
        } catch (error) {
            console.log(error);
        }
    }
}

const eventUpdate = ( event ) => ({ 
    type: types.eventUpdate,  
    payload: event
});

export const eventStartDelete = () => {  
    
    return async (dispatch, getState) => {

        const { activeEvent } = getState().calendar;
        // console.log(activeEvent);
        // console.log("deleting ", event);
        try{
            const resp = await fetchToken(`events/${activeEvent.id}`, {}, 'DELETE');
            const body = await resp.json();
            
            // console.log(body);
            if(body.ok){
                dispatch( eventDelete() );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error){
            console.log(error);
        }

    }
};

const eventDelete = () => ({  type: types.eventDelete });

export const setCurrentStartDate = ( date ) => ({  
    type: types.eventSetCurrentStartDate,
    payload: date
});

export const eventStartLoading = () => {
    return async (dispatch) => {

        try{

            const resp = await fetchToken('events', {}, 'GET');
            const body = await resp.json();
            // console.log(body.eventos);
            
            if(body.ok){
                const events = body.eventos;
                //const events = processEvents(body.eventos);
                // console.log("Los eventos con fechas tipo date:", events);
                dispatch( eventLoaded(events) );
            }
        } catch (error){
            console.log(error);
        }

    }

}

const eventLoaded = ( events ) => ({  
    type: types.eventLoaded,
    payload: events
});

export const eventLogout = () => ({
    type: types.eventLogout
});