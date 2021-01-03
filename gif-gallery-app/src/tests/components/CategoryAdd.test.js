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
    

    

    
})
