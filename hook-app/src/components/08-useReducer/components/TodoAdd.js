import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [ { description }, taskInputChangeHandler, reset ] = useForm({
        description: ''
    });


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(description.length <= 0){
            return;
        }

        console.log("Submit Nueva tarea");

        const newTask = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // const action = {
        //     type: "add",
        //     payload: newTask
        // }

        handleAddTodo(newTask);

        reset();
    }

    return (
        <>
            <h4>Agregar tarea:</h4>
            <hr/>
            <form onSubmit={ handleSubmit }>
                <div className="d-grid gap-2">
                    <input type="text" 
                        className="form-control"
                        name="description"
                        placeholder="Escriba la tarea"
                        autoComplete="off"
                        value = { description }
                        onChange={ taskInputChangeHandler }                            
                        ></input>
                    <button type="submit"
                        className="btn btn-outline-success mt-1 btn-block"
                        >Agregar tarea +</button>
                </div>
            </form>            
        </>
    )
}
