import React from 'react';
import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom'
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Probando RealExampleRef', () => {
    const wrapper = shallow( <RealExampleRef />);

    const { result } = renderHook( () => useForm( RealExampleRef ) );

    test('should mostrarse el componente RealExampleRef', () => {
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

        // Varifica que el componente MultipleCustomHooks NO Exista 
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBeFalsy();
    });

    test('should mostrar el componente de MultipleCustomHooks', () => {
        // Simula el click en el botton
        wrapper.find('button').simulate('click');
        // console.log(wrapper.html());
        // Verificamos que el componete MultipleCustomHooks exista por que ya se apreto el botton
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBeTruthy();

        
    })
    
    
})
