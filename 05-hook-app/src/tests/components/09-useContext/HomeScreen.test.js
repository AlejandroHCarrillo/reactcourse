import React from 'react';
import { mount, shallow } from "enzyme"
import { HomeScreen } from "../../../components/09-useContext/HomeScreen"
import { UserContext } from '../../../components/09-useContext/UserContext';

// "mount" no sirve con react 17
describe('Probando el componente HomeScreen', () => {

    const user = {
        id: 1234,
        nombre: 'Alejandro',
        email: 'alex@hotmail.com'
    };
    const wrapper = mount(
                            <UserContext.Provider value={{ user }}  >
                                <HomeScreen/>
                            </UserContext.Provider>
                            );

    test('should renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();wpscreenw
    });
    
});
