import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    console.log('TodoListItem: ', todo);
    return (
        <li key={todo?.id}
        className="list-group-item"
        onClick={ () => handleToggle(todo.id) }
        >
        <p 
        className= { `${ todo?.done && 'complete' }` }
        
        >
        {index+1}. {todo?.desc}
        </p>

        <button className="btn btn-danger"
        onClick = { () => handleDelete(todo?.id) }
        >Eliminar</button>
        </li>
    )
}
