import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hour');
const nowPlus1 = now.clone().add(1,'hour');

let initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate(),
    user: {
        uid:"",
        name:""
    }
};

export const CalendarEventModal = () => {
    const dispatch = useDispatch();

    // leyendo el contenido del state ui del store
    const { modalOpen } = useSelector( state => state.ui );
    const { activeEvent, currentEventDate } = useSelector( state => state.calendar );

    const [dateStart, setDateStart] = useState( now.toDate());
    const [dateEnd, setDateEnd] = useState( nowPlus1.toDate());
    const [titleIsValid, setTitleValid] = useState(true);
    
    const [formValues, setFormValues] = useState( initEvent );
    const { title, notes, start, end, id } = formValues;
   
    if(currentEventDate){
        // console.log(currentEventDate);
        const startDate = moment(currentEventDate).hour(7).minutes(0).seconds(0).add(1, 'hour');
        initEvent.start = startDate.toDate();
        initEvent.end = startDate.clone().add(1,'hour').toDate();
    }

    useEffect(() => {
        if ( activeEvent ){
            // console.log("usando evento activo");
            setFormValues( activeEvent );
            setDateStart( moment(activeEvent.start).toDate() );
            setDateEnd( moment(activeEvent.end).toDate() );
        } else{
            // console.log("usando evento NUEVO");
            setFormValues( initEvent );
            setDateStart( moment(initEvent.start).toDate() );
            setDateEnd( moment(initEvent.end).toDate()  );
        }
    }, [activeEvent, currentEventDate]);


    const handleInputChange = ( { target } ) => {
        // console.log("handleInputChange: ", target.name );
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleStartDateChange = (e) => {
        // console.log(e);
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: moment(e).toDate()
        });

    }

    const handleEndDateChange = (e) => {
        // console.log(e);
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: moment(e).toDate()
        });
    }

    const handleSubimt = (e) => {
        e.preventDefault();
        // console.log(formValues);

        const momentStart = moment( new Date(start).getTime() );
        const momentEnd = moment( new Date(end).getTime() );

        if ( momentStart.isSameOrAfter( momentEnd ) ){
            const textError = 'La fecha fin debe ser mayor a la fecha inicial'
            return Swal.fire('Error', textError, 'error' );
        }

        if (title.trim().length <= 2){
            setTitleValid(false);
            return;
        }

        setTitleValid(true);
        
        // if (id){
        if (activeEvent){
            dispatch( eventStartUpdate( formValues ) );
        }
        else {
            dispatch( eventStartAddNew( formValues ) );
        }
            
        closeModal();
    }
    
    const closeModal = () => {
        // console.log('Closing modal...');
        dispatch( uiCloseModal() );
        // dispatch( eventSetActive(null) );
        dispatch( eventClearActiveEvent() );
        setFormValues(initEvent);        
    }

    return (
        <div>

        <Modal 
            isOpen= { modalOpen || false } 
            onRequestClose = { closeModal }
            style = { customStyles }
            className = "modal "
            overlayClassName = "modal-fondo"
            closeTimeoutMS = {200}
        >
            <h1> { (activeEvent)?'Editar Evento': 'Nuevo evento' } </h1>
            <hr />
            <form className="container" onSubmit= { handleSubimt } >

                <div className="form-group">
                    <label>Fecha y hora inicio: </label>
                    <DateTimePicker className="form-control"
                        value = { dateStart }
                        onChange = { handleStartDateChange }
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin: </label>
                    <DateTimePicker  className="form-control"
                        value = { dateEnd }
                        onChange = { handleEndDateChange }
                        minDate = { dateStart }
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas </label>
                    <input 
                        type="text" 
                        className= { `form-control ${ !titleIsValid && 'is-invalid'  } ` }
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value= { title }
                        onChange = { handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value= { notes }
                        onChange = { handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    Propietario: { activeEvent?.user?.name }
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>

        </div>
    )
}
