import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import "./style.css"

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
//     return [{
//         id: new Date().getTime(),
//         desc: 'Estudiar',
//         done: false
//     }];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo
        });
    };

    useEffect(() => {        
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    // console.log(description);



    const handleDelete = (todoId) => {
        console.log("Delete tarea");

        const action = {
            type: "delete",
            payload: todoId
        }

        dispatch(action);

    }

    const handleToggle = ( todoId ) => {
        console.log('Toggle status done');

        dispatch({
            type: "toggle",
            payload: todoId
        });

    }

    return (
        <>
            <h1>TodoApp:</h1>
            <p>Tareas pendientes <small>({ todos.length })</small>.</p> 
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete = { handleDelete } handleToggle = { handleToggle } />

                    {/* <ul className="list-group list-group-flush">
                        { 
                            todos.map( (t, i) =>  (
                                <li key={t.id}
                                className="list-group-item"
                                >
                                    <p className= { `${ t.done && 'complete' }` }
                                        onClick={ () => handleToggle(t.id) }
                                    >
                                        {i+1}. {t.desc}
                                    </p>

                                    <button className="btn btn-danger"
                                        onClick = { () => handleDelete(t.id) }
                                    >Eliminar</button>
                                </li>  
                            ) ) 
                        }
                        
                    </ul> */}
                </div>
                <div className="col-5"> 
                    <TodoAdd handleAddTodo = {handleAddTodo} />
                </div>

            </div>

        </>
    )
}
