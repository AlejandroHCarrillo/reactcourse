import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { messages } from '../../helpers/calendar-messages-es';
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';

import "react-big-calendar/lib/css/react-big-calendar.css";
import 'moment/locale/es';

moment.locale('es');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [{
    title: 'Mi cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fa0023', 
    notes: 'Comprar el regalo para mi',
    user: {
        _id: '123',
        name: 'Jhon Kmaney'
    }
},
{
    title: 'Declarar a hacienda',
    start: moment().add(3, 'hours').toDate(),
    end: moment().add(4, 'hours').toDate(),
    bgcolor: '#fa0023', 
    notes: 'Hacer declaracion anual',
    user: {
        id: '234',
        name: 'Elmer'
    }
},
]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastview') || 'month' )

    const onDoubleClick = (e) => {
        console.log(e); 
    };

    const onSelectEvent = (e) => {
        console.log(e); 
    };

    const onViewEvent = (e) => {
        console.log(e);
        setLastView(e);
        localStorage.setItem('lastview', e);
    };


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
                events = { events }
                startAccessor = "start"
                endAccessor = "end"
                messages = { messages }
                eventPropGetter = { eventStyleGetter }
                onDoubleClickEvent = { onDoubleClick }
                onSelectEvent = { onSelectEvent } 
                onView = { onViewEvent }
                view = {lastView}
                components={{
                    event: CalendarEvent
                }}
            />
        </div>
    )
}
