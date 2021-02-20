import React from 'react'
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth );
    // console.log("El id del usuario es: ", uid );
    const { active: note } = useSelector(state => state.notes );
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body, date } = formValues;

    // useRef permite almacenar una variable mutable
    // que no redibuja el componente si cambia
    const activeId = useRef( note.id );

    // Con este efecto reseteamos el contenido de NoteScreen
    // con el la nueva note. Usamos activeId, para validar el cambio. 
    useEffect(() => {
        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id;
        }
    }, [ note, reset ]);

    // Con este efecto buscamos actualizar la nota activa 
    // activeNote en el store para que este actualizada
    // usamos formValues para que lo actualize 
    // cuando cambie cualquier valor del formulario 
    useEffect(() => {
        // dispatch( activeNote(formValues.uid, { ...formValues } ) );
        dispatch( activeNote(uid, { ...formValues } ) );
    }, [formValues, dispatch])

    const handleDelete = () => {
        // console.log("Delete note id: ", id);
        Swal.fire({
            title: "¿En verdad desea eliminar esta nota?",
            text: 'Esta nota se eliminara permanentemente, ¿Desea continuar?',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: `Continuar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch( startDeleting( note.id ) );
                Swal.fire('Eliminacion exitosa!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('La nota no se elimino', '', 'info')
            }
        });
    }

    return (
        <div className="notes__main-content">                
            <NotesAppBar date={date} />
            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Escriba el titulo aqui..."
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    onChange = { handleInputChange }
                    value={ title }
                    />

                <textarea
                    placeholder="Escriba el contenido aqui..."
                    className="notes__textarea"
                    name="body"
                    onChange = { handleInputChange }
                    value={ body }
                    ></textarea>

{               note.url && 
                <div className="notes__image">
                    <img 
                        src={ note.url }
                        alt="imagen"
                        />
                </div>
}
            </div>

            <button className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>
        </div>
    )
}
