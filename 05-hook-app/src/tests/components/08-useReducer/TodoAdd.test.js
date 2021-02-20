import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/components/TodoAdd';

describe('Probar el TodoAdd', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={ handleAddTodo } />);

    test('should mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should NOT llamar al handleAddTodo cuando no tiene informacion en el input', () => {
        // console.log(wrapper);

        // wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });
        
        // Otra forma de simular el evento submit 
        const formSubmit = wrapper.find('form').prop('onSubmit');
        // console.log(formSubmit);

        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).not.toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('should llamar al handleAddTodo cuando no tiene informacion en el input', () => {

        const value = "prueba del hlandleAddTodo";
        // console.log("antes: ", wrapper.html);

        wrapper.find('input').simulate('change', { 
            target: { 
                value, 
                name: 'description' 
            } 
        
        });

        // Otra forma de simular el evento submit 
        // const formSubmit = wrapper.find('form').prop('onSubmit');
        // console.log(formSubmit);
        // formSubmit({ preventDefault(){} });

        wrapper.find('form').simulate('submit', { preventDefault: ()=>{} });

        // console.log("Despues: ", wrapper.html());
        // pruebas para saber si se ejecuto el handleAddTodo
        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number),
        });

        // console.log("input value: ", wrapper.find('input').prop('value'));
        expect(wrapper.find('input').prop('value').length ).toBe(0);
    });

    
    
})
