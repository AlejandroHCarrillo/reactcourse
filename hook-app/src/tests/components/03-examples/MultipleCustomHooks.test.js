import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
// import { renderHook, act} from "@testing-library/react-hooks"

import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Probando el componente MultipleCustomHooks', () => {
    // useCounter.mockReturnValue({
    //     counter: 10,
    //     increment: () => {}
    // });

    test('should mostrar el componente', () => {
        
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
        
    }); 

    test('should mostrar informacion', () => {
        useCounter.mockReturnValue({
            counter: 10
        });

        useFetch.mockReturnValue({
            data: [{
                author: 'alex',
                quote: 'Se los dije'
            }],
            loading: false,
            error: null
        });  

        const wrapper = shallow( <MultipleCustomHooks /> );        
        // console.log( wrapper.html() );

        // verifica que no exista la clase alert, 
        // pues si aparece significa que esta cargando y no hay datos
        expect( wrapper.find('.alert').exists() ).toBe(false);

        // Busca el texto de los elemento con la clase de mb-10
        // esto significa que dentro estará la frase (quote) 
        expect( wrapper.find('.mb-10').text().trim() ).toBe('Se los dije');

        // busca el elemento html footer
        // dentro tiene que estar el author.
        expect( wrapper.find('footer').text().trim() ).toBe('alex');

    }); 

})
