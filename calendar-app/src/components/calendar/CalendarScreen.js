import React, { useState } from 'react';
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
import { eventClearActiveEvent, eventSetActive, setCurrentStartDate } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const CalendarScreen = () => {
    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector( state => state.calendar );
    
    const [lastView, setLastView] = useState( localStorage.getItem('lastview') || 'month' )
   
    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() );
    };
    
    const onSelectEvent = (e) => {
        dispatch( eventSetActive(e) );
    };

    const onViewEvent = (e) => {
        // console.log("onViewEvent: ", e);
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
        // console.log(event, start, end, isSelected);        
        const style = {
            backgroundColor: '#fa0523',
            borderRadius: '2px',
            opacity: 0.7,
            display: 'block',
            color: 'white'
        }
        return { style }
    };

    return (
        <div className="calendar-screen">
            {/* <h1>Calendar Screen works</h1> */}
            <Navbar />

            <Calendar
                localizer = { localizer }
                events = { events || [] }
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
