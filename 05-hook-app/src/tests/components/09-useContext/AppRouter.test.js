import { mount } from 'enzyme';
import React from 'react';
import { UserContext } from '../../../components/09-useContext/UserContext';

// "mount" no sirve con react 17
// Mount sirve para rederizar los componentes hijos
// como no funciona estas pruebas van a fallar
describe('Probar appRouter', () => {

    const user = {
        id: 1234,
        nombre: 'Alejandro',
        email: 'alex@hotmail.com'
    };


    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <appRouter />
        </UserContext.Provider>
    );
    
    test('should de renderisarse', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
