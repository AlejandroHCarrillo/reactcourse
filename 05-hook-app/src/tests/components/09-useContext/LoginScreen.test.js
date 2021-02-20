import { mount, shallow } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

// "mount" no sirve con react 17
// Mount sirve para rederizar los componentes hijos
// como no funciona estas pruebas van a fallar
describe('Pruebas en LoginScreen', () => {
    const user = {
        id: 1234,
        nombre: 'Alejandro',
        email: 'alex@hotmail.com'
    };

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    // const wrapper = shallow(<LoginScreen />);

    test('should de mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 1234,
            nombre: 'Alejandro',
            email: 'alex@hotmail.com'
        });
    })
    
    
})
