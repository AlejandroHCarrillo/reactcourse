import React from 'react'

export const CalendarEvent = ( { event } ) => {
    // Este componente muestra la informacion del evento
    // console.log(event);
    const { title, user} = event;
    return (
        <>
            <strong>{ title }</strong>
            <span>-{ user.name }</span>
        </>
    )
}
