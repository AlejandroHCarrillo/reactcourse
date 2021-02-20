import React from 'react';
import '@testing-library/jest-dom'; // libreria que sirve para tener la ayuda del expect
import { shallow } from "enzyme";
import { CategoryAdd } from '../../components/CategoryAdd'

describe('Probando el componente CategoryAdd', () => {
    // const setCategories = () => {}; // funcion dummy para cumplir el parametro requerido
    const setCategories = jest.fn(); // funcion dummy usando jest para cumplir el parametro requerido
    let wrapper = shallow(<CategoryAdd setCategories = {setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories = {setCategories}/>);
    });

    test('el componente CategoryAdd debe de mostrarse ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar el texto del input', () => {
        const txtInput = wrapper.find('input');
        const expValue = "Esta es un texto de prueba";
        txtInput.simulate('change', { target: { value: expValue }});

        expect( wrapper.find('h2').text().trim() ).toBe( expValue );
    })
    
    test('no debe de postear on submit ', () => {
        // el segundo parametro de simulate son los parametros enviados
        // podemos mandar la funcion de esta manera { preventDefault: ()=>{} } 
        // o de esta manera { preventDefault(){} }
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('debe de simular una busqueda completa ', () => {
        // 1. simular input change
        const txtInput = wrapper.find('input');
        const expValue = "Esta es un texto de prueba";
        txtInput.simulate('change', { target: { value: expValue }});        
        expect( wrapper.find('h2').text().trim() ).toBe( expValue );

        // 2. simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // 3. validar que setCategories se haya llamado al menos una vez
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);

        // verifica que el parametro mandado halla sido una funcion 
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        
        // 4. verificar que el input values este vacio al final
        // console.log(txtInput.props());
        // console.log('value: ', txtInput.prop('value'));
        expect(wrapper.find('h2').text().trim()).toBe('');  // Validacion de valor vacio usando ''
        expect(wrapper.find('h2').text().trim().length).toBe(0); // Validacion de valor vacio usando length = 0

        expect(wrapper.find('input').prop('value')).toBe('');  // Validacion de valor del INPUT vacio usando ''
        expect(wrapper.find('input').prop('value').length).toBe(0); // Validacion de valor del INPUT vacio usando length = 0

    })


    
    

    

    
})
