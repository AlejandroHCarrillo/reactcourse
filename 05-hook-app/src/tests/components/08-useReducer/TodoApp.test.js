import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodo';
import { act } from '@testing-library/react';

describe('Porbar el TodoApp', () => {
    const wrapper = shallow(<TodoApp/>);

    // Simulamos la funcion storage
    // Storage.prototype.setItem = jest.fn(()=>{});

    test('should de renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test('should de agregar una tarea (Todo)', () => {
        // mount esta regresando este error:
        // TypeError: Cannot read property 'child' of undefined
        // const wrapper = mount( <TodoApp /> );
        const todoAppfn = wrapper.find('TodoAdd').prop('handleAddTodo');
        console.log(todoAppfn);
        // Agregamos la primer tarea
        todoAppfn(demoTodos[0]);
        // Agregamos la segunda tarea
        // todoAppfn(demoTodos[1]);
        // otra manera de agregar la segunda tarea
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);

        // console.log(wrapper.html());
        
        // console.log( "todos: ", wrapper.find('small').text().trim() );
        // evaluamos que el numero de tareas sea (2)
        expect(wrapper.find('small').text().trim()).toBe('(2)');

        // console.log( "p: ", wrapper.find('p').text().trim() );
        // Ejecutamos directamente el handleAddTodo sin generar una referencica 
        expect(wrapper.find('p').text().trim()).toBe('Tareas pendientes (2).');

        // Varificamos que el localstorage.setItem se halla llamado 2 veces
        // expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        // Al parecer para verificar el local storage hay que montar el componente

    });

    test('should de eliminar una tarea (Todo)', () => {
        const wrapper = shallow(<TodoApp/>);

        // Agregar 2 tareas
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);

        // evaluamos que el numero de tareas sea (2)
        expect(wrapper.find('small').text().trim()).toBe('(2)');
        // Ejecutamos directamente el handleAddTodo sin generar una referencica 
        expect(wrapper.find('p').text().trim()).toBe('Tareas pendientes (2).');

        // Eliminar una tarea
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[1].id );

        // evaluamos que el numero de tareas sea (1)
        expect(wrapper.find('small').text().trim()).toBe('(1)');

    });

    
    
});
