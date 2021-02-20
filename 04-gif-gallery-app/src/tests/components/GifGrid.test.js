import { react } from 'react'
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
// jest.mock sirve para marcar o preparar useFetchGifs con datos ficticios
jest.mock('../../hooks/useFetchGifs');

import '@testing-library/jest-dom'; // libreria que sirve para tener la ayuda del expect

describe('Probando componente principal GifGrid ', () => {
    const category = 'spiderman';
    
    test('should renderizar el componente en estado inicial', () => {
        // Establecemos el valor especifico que regresaran el mock
        // En este ejemplo tenemos los datos vacios y el estado loading verdadero.
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        
        const wrapper = shallow(< GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should mostrar elementos cuando se usa el usaUseFetchGifs ', () => {
        // Establecemos el valor especifico que regresaran el mock
        // En este ejemplo tenemos los datos vacios y el estado loading verdadero.
        const imgs = [
            {
                 id: 'qazw3erds',
                 url: 'http://localhost/imagenes/ficticias/mock1.jpg',
                 title: 'imagende prueba 1'
            },
            {
                id: 'qwerty',
                url: 'http://localhost/imagenes/ficticias/mock2.jpg',
                title: 'imagen de prueba 2'
           }
        ];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper = shallow(< GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
        // Verificamos que el parrafo que contiene el texto de de "Cargando..." no exista
        expect(wrapper.find('p').exists() ).toBe(false);
        // Verificamos si el componete de los Items existe dentro de el grid
        expect(wrapper.find('GridItem').length ).toBe( imgs.length );

    })
    
    
})
