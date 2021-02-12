import React from 'react'
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent, eventDelete } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch( eventDelete() );
    };

    return (
        <button className="btn btn-danger fab-danger" onClick={ handleClick }>
            <i className="fas fa-trash"/>
            <span> Eliminar evento </span>
        </button>
    )
}
