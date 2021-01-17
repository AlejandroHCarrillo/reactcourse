import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodo"
import { TodoList } from "../../../components/08-useReducer/components/TodoList"



describe('Probando TodoList', () => {

    const handleDelete = jest.fn(); // funcion dummy usando jest para cumplir el parametro requerido
    const handleToggle = jest.fn(); // funcion dummy usando jest para cumplir el parametro requerido

    const wrapper = shallow(
        <TodoList todos={demoTodos} 
                  handleDelete={handleDelete} 
                  handleToggle={handleToggle}
        />);

    test('should mostrar el componente', () => {
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();     
    });

    test('should de contener los elementos del demoTodo', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        console.log(wrapper.find('TodoListItem').at(0).props() );

        // revisa que este la funcion handleDelete
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual(expect.any(Function));
        // revisa que este la funcion handleToggle
        expect( wrapper.find('TodoListItem').at(1).prop('handleToggle') ).toEqual(expect.any(Function));
    });
    
});
