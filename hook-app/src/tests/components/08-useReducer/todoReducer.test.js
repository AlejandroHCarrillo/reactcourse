import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodo"

describe('Probando el todoReducer ', () => {

    test('should regresar el estado por default', () => {
        const state = todoReducer(demoTodos, {});
        console.log('state: ',state);
        // verificamos que la accion por default me regrese el mismo objeto del estado inicial
        expect( state ).toEqual( demoTodos );
    });

    test('should de agregar una tarea (add TODO)', () => {
        const newTodo = {
            id: 3,
            desc: "Nueva tarea",
            done: false
        };

        const action = {
            type: "add",
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        console.log('state: ',state);

        // verificamos que halla aumentado en 1 la lista de todos.
        expect( state.length ).toEqual( demoTodos.length + 1 );
        
    });
    
    test('should de eliminar una tarea (delete TODO)', () => {
        const action = {
            type: "delete",
            payload: 2
        };
        
        const state = todoReducer(demoTodos, action);
        // console.log('state: ',state);
        
        // verificamos que disminuya en 1 la lista de todos.
        expect( state.length ).toEqual( demoTodos.length - 1 );
        
        // verificamos que solo quede la primer tarea 
        expect( state ).toEqual( [demoTodos[0]] );
    });

    test('should de cambiar el estado de una tarea (toggle)', () => {
        const action = {
            type: "toggle",
            payload: 2
        };

        const state = todoReducer(demoTodos, action);
        console.log('state: ',state);

        console.log(state[1].done);
        // verificamos que el estado de la segunda tarea sea true
        expect( state[1].done ).toBe( true );
        expect( state[0] ).toEqual( demoTodos[0] );

        
    });
    
    
})
