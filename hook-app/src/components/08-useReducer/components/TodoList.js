import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos=[], handleDelete, handleToggle}) => {
    console.log(todos);
    return (
          <ul className="list-group list-group-flush">
                        { 
                            todos.map( (t, i) =>  (
                                <TodoListItem  key={t.id} todo={ t } index={ i } handleDelete = { handleDelete }  handleToggle = { handleToggle }/>
                            ) )
                        }
                    </ul>   
    )
}
