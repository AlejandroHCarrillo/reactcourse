import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { messages } from '../../helpers/calendar-messages-es';
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarEventModal } from './CalendarEventModal';

import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading, setCurrentStartDate } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar ); 
    const { uid } = useSelector( state => state.auth ); 
    const [ lastView, setLastView] = useState( localStorage.getItem('lastview') || 'month' );
   
    let myEvents = events;

    // Cambiamos el formato de los eventos para que no truene las vistas que no son month
    myEvents.forEach(element => {
        element.start = moment(element.start).toDate();
        element.end = moment(element.end).toDate();
    });

    useEffect(() => {
        dispatch( eventStartLoading() );
    }, [dispatch]) 

    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() );
    };
    
    const onSelectEvent = (e) => {
        e.start = new Date(e.start).getTime();
        e.end = new Date(e.end).getTime();
        dispatch( eventSetActive(e) );
    };

    const onViewEvent = (e) => {
        setLastView(e);
        localStorage.setItem('lastview', e);
    };

    const onSelectedSlot = (e) => {
        dispatch( eventClearActiveEvent() );

        if(e.action==='doubleClick'){
            dispatch( setCurrentStartDate( e.start ) )
            dispatch( uiOpenModal() );
        }
    }

    // Configuramos el estilo del evento a mostar
    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log(event);
        const style = {
            backgroundColor: (uid === event.user._id || uid === event.user.uid) ? '#fa0523' : '#367CF7',
            borderRadius: '2px',
            opacity: 0.7,
            display: 'block',
            color: 'white'
        }
        return { style }
    };

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer = { localizer }
                events = { myEvents || [] }
                startAccessor = "start"
                endAccessor = "end"
                messages = { messages }
                eventPropGetter = { eventStyleGetter }
                onDoubleClickEvent = { onDoubleClick }
                onSelectEvent = { onSelectEvent } 
                onView = { onViewEvent }
                selectable = { true }
                onSelectSlot = { onSelectedSlot }
                view = {lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab/>
            { activeEvent && <DeleteEventFab/> }
            <CalendarEventModal/>

        </div>

    )
}
