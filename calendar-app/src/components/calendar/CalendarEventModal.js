import React, { useState } from 'react'
import Modal from 'react-modal';
import moment from 'moment';

import DateTimePicker from 'react-datetime-picker';

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

    const handleStartDateChange = (e) => {
        setDateStart(e);
        console.log(e);
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        console.log(e);
    }


    // const [modalIsOpen, setIsOpen] = React.useState(true);

    // const openModal = () => {
    //   setIsOpen(true);
    // }
    
    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }
    
    const closeModal = () => {
        console.log('Closing modal...');
        // setIsOpen(false);
    }

    return (
        <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal 
            isOpen= { true } 
        //   onAfterOpen={afterOpenModal}
          onRequestClose = { closeModal }
          style = { customStyles }
          className = "modal "
          overlayClassName = "modal-fondo"
          closeTimeoutMS = {200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

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
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
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