import React from 'react';
import { mount, shallow } from "enzyme";
import '@testing-library/jest-dom'
import { AuthContext } from '../../auth/AuthContext';
import { Navbar } from '../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../types/types';

describe('Probando el Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
     };

    const user = {
        name: "Usuario pruebas",
        logged: true
    };

    // Creamos el contexto
    const contexValue = {
        dispatch: jest.fn(),
        user
    };
    
    const wrapper = mount(
        <AuthContext.Provider value = { contexValue }>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar /> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(()=>{
        jest.clearAllMocks();
    })

    test('should debe mostrar el componente correctamente', () => {

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        
        // verificamos que exista la clase text info que contiene al usaurio
        expect(wrapper.find('.text-info').exists() ).toBe(true);

        // Verificamos que el usuario 
        expect(wrapper.find('.text-info').text().trim() ).toBe(contexValue.user.name);

    });

    test('should llamar el logout y usar history', () => {
        
        // Ejecutar el boton de logout
        // wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();
        
        expect( contexValue.dispatch ).toHaveBeenCalledWith({ type: types.logout });

        expect( historyMock.replace ).toHaveBeenLastCalledWith('/login');
    });
    

    
})
