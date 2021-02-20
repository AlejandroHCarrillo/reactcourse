import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { HookApp } from "../HookApp"

describe('Pruebas del hookApp', () => {
    test('should mostrar el componente', () => {
        const wrapper = shallow( <HookApp /> );

        expect( wrapper ).toMatchSnapshot();
        
    })
    
})
