import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Batman"', () => {
    //     const saludo = 'Hola, soy Batman';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Batman';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Batman';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe( subTitulo );

    })
    
    
    

})
