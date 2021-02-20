import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from "../../components/routers/DashboardRoutes"
import { MemoryRouter } from 'react-router-dom';

describe('Probar el DashboardRoutes', () => {
    test('should mostarse el componente', () => {
        // Creamos el contexto
        const contexValue = {
            dispatch: jest.fn(),
            user: {
                name: "Usuario pruebas",
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value = { contexValue }>
                <MemoryRouter>
                    <DashboardRoutes /> 
                </MemoryRouter>
            </AuthContext.Provider>
        );

        //  console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        
        // console.log( wrapper.find('.text-info').text() );

        // verificamos que exista la clase text info que contiene al usaurio
        expect(wrapper.find('.text-info').exists() ).toBe(true);

        // Verificamos que el usuario 
        expect(wrapper.find('.text-info').text() ).toBe(contexValue.user.name);
    })
    
})
