
import React from 'react';
import { mount, shallow } from "enzyme";
import { PrivateRoute } from '../../components/routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

// Las pruebas de mount no funcionan
describe('Pruebas en PrivateRoute', () => {
    const props = {
        location: {
            pathname: '/home',
            search:''
         }
    };

    // Hacemos el mock de la funcion setItem del LocalStorage
    Storage.prototype.setItem = jest.fn();

    test('should de mostrar el compnente si esta loggeado y guardar local storage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuthenticated={true}
                    component= { () => <span>OK!!!</span>
                    }
                    {...props}
                    />
            </MemoryRouter>
        );

        // const spn = wrapper.html();
        // console.log(spn);

        // console.log(wrapper.find('span').exists());
        // revisamos que dentro del componente exista el elemto span
        expect(wrapper.find('span').exists()).toBe(true);
        // Verifica que llame al localstorage con argumentos lastpath y location
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/home');

    });

    test('should de bloquear el componente si no esta authenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuthenticated={ false }
                    component= { () => <span>OK!!!</span>
                    }
                    {...props}
                    />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
        
    })
    
    
})
