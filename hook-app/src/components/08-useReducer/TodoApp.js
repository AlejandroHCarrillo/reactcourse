import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import "./style.css"

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
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
                    <TodoList todos={todos}
                        key={1} 
                        handleDelete = { handleDelete } 
                        handleToggle = { handleToggle } />
                </div>
                <div className="col-5"> 
                    <TodoAdd handleAddTodo = { handleAddTodo } />
                </div>

            </div>

        </>
    )
}
