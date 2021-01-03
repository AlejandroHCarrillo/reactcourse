import React from 'react';
import { shallow } from "enzyme";
import { CategoryAdd } from '../../components/CategoryAdd'

describe('Probando el componente CategoryAdd', () => {
    const setCategories = () => {}; // funcion dummy para cumplir el parametro requerido
    const wrapper = shallow(<CategoryAdd setCategories = {setCategories}/>);

    test('el componente CategoryAdd debe de mostrarse ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar el texto del input', () => {
        const txtInput = wrapper.find('input');
        const expValue = "Esta es un texto de prueba";
        txtInput.simulate('change', { target: { value: expValue }});

        expect( wrapper.find('h2').text().trim() ).toBe( expValue );
    })
    

    

    
})
