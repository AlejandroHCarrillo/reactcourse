import React, { useState } from 'react'
import Modal from 'react-modal';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';

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

export const CalendarEventModal = () => {
    const [dateStart, setDateStart] = useState( now.toDate() );
    const [dateEnd, setDateEnd] = useState( nowPlus1.toDate() );
    const [titleIsValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState(
        {
            title: 'Evento',
            notes: '',
            start: now.toDate(),
            end: nowPlus1.toDate()
        }
    )

    const { title, notes, start, end } = formValues

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
            start: e
        });

    }

    const handleEndDateChange = (e) => {
        // console.log(e);
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    const handleSubimt = (e) => {
        e.preventDefault();
        console.log(formValues);

        const momentStart = moment( start );
        const momentEnd = moment( end );

        console.log("momentStart: ", momentStart.toDate());
        console.log("momentEnd: ", momentEnd.toDate());

        console.log("la fecha inicial es menor?  ", momentStart.isSameOrAfter(momentEnd.toDate()) );

        if ( momentStart.isSameOrAfter(momentEnd) ){
            const textError = 'La fecha fin debe ser mayor a la fecha inicial'
            console.log("textError: ", textError)
            return Swal.fire('Error', textError, 'error' );
        }

        console.log();
        if (title.trim().length <= 2){
            setTitleValid(false);
            return;
        }

        setTitleValid(true);
        
        closeModal();
    }

    const [modalIsOpen, setIsOpen] = React.useState(true);

    // const openModal = () => {
    //   setIsOpen(true);
    // }
    
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }
    
    const closeModal = () => {
        console.log('Closing modal...');
        setIsOpen(false);
    }

    return (
        <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal 
            isOpen= { modalIsOpen } 
        //   onAfterOpen={afterOpenModal}
          onRequestClose = { closeModal }
          style = { customStyles }
          className = "modal "
          overlayClassName = "modal-fondo"
          closeTimeoutMS = {200}
        >
            <h1> Nuevo evento </h1>
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
