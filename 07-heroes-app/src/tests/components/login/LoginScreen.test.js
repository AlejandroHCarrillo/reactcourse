import { mount, shallow } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en LoginScreen', () => {
    const historyMock = {
        replace: jest.fn()
    };

    // Hacemos el mock de la funcion getItem del LocalStorage
    Storage.prototype.getItem = jest.fn();

    // Creamos el contexto
    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    const wrapper = mount(
                        <AuthContext.Provider value = { contexValue }>
                            <LoginScreen history={ historyMock } /> 
                        </AuthContext.Provider>
                        );

    test('should mostrarse el componente de LoginScreen', () => {
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('button').text()).toBe('Login');

    });
    
    test('should de llamar el dispatch y hacer la navegacion al home', () => {
        // Ojo el usario Alejandro esta fijo en la pantalla
        const actionMock = {
            payload: {
                logged: true,
                name: 'Alejandro',
            },
            type: types.login
        } 
        // simulamos el click en el login para hacer el dispatch y la navegacion
        // wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();
        
        // Verificar que se llamo el dispatch
        expect(contexValue.dispatch).toBeCalledWith( actionMock );

        // varifica si se llamo al localStorage para obtener el lastPath
        expect(localStorage.getItem).toHaveBeenLastCalledWith('lastPath');

        // Verificar que se hizo la navegacion
        // console.log(wrapper.html());
        expect(historyMock.replace).toHaveBeenCalledWith('/home');

    });
     
});
