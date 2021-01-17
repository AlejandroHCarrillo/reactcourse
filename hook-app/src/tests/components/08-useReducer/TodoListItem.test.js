import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodo"
import { TodoListItem } from '../../../components/08-useReducer/components/TodoListItem';

// console.log(demoTodos);

describe('Probando el componente TodoListItem', () => {
    const todoTest = demoTodos[1];
    const handleDelete = jest.fn(); // funcion dummy usando jest para cumplir el parametro requerido
    const handleToggle = jest.fn(); // funcion dummy usando jest para cumplir el parametro requerido
    const index = 0;
    const wrapper = shallow( <TodoListItem 
         todo = { todoTest } index = {index} handleDelete = {handleDelete} handleToggle = {handleToggle}  />);

    console.log(wrapper.html());
    
    // beforeEach(() => {
    //     jest.clearAllMocks();
    //     // wrapper = shallow( <TodoListItem 
    //     //     todo = { todoTest } 
    //     //     index = {0} 
    //     //     handleDelete = {handleDelete} 
    //     //     handleToggle = {null}  />);
    // });

    
    test('should mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(2);
    });

    test('should llamar la funcion handleToggle', () => {
        wrapper.find('.list-group-item').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(2);        
    });

    test('should debe mostrar el texto de la tarea', () => {
        const texto = wrapper.find('p').text().trim(); 
        // console.log(texto);
        expect( texto ).toBe( `${index+1}. ${ todoTest.desc }`)
    })
    
    test('should cuando la tarea este en done, debe mostrar la clase complete', () => {

        // Cambiamos el estado a la tarea de prueba
        const todoCompleted = { ...todoTest, done:true };

        // volvemos a ejecuter el componente para que refleje el cambio
        const wrapper = shallow( <TodoListItem 
            todo = { todoCompleted } 
            index = {index} 
            handleDelete = {handleDelete} 
            handleToggle = {handleToggle}  />);

        const classExpected = "complete";
        const parrafo = wrapper.find('p'); 
        
        const cn = parrafo.prop('className');

        expect( cn.includes(classExpected) ).toBe( true );
        // otra forma de validar que la clase este presente
        expect(parrafo.hasClass(classExpected)).toBe(true);

    })

    
});
