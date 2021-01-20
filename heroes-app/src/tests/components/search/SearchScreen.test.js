import React from 'react';
import { mount } from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';
import { searchHeroes } from '../../../components/selectors/searchHeroes';

describe('Pruebas al searchScreen', () => {

    const historyMock = {
        location: jest.fn(),
        push: jest.fn()
    };
    // Creamos el contexto
    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: true
        }
    }

    const wrapper = mount(
        // <AuthContext.Provider value = { contexValue }>
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" 
                    component={ ()=> <SearchScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        // </AuthContext.Provider>
    );

    test('should mostrar el componente con los parametros por default', () => {
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();

        // console.log(wrapper.find('h1').html());
        // Verifica que este el encabezado de las busquedas
        expect(wrapper.find('h1').text()).toBe('Busquedas');

        // Verifica que resultados sean: "Resultados encontrados (0)"
        expect(wrapper.find('.col-7').find('h4').text()).toBe('Resultados encontrados (0)');

        // Verifica que no se hallan renderizado el componente HeroeCard
        expect(wrapper.find('HeroeCard').exists()).toBe(false);

    });
    
    test('should mostrar el resultados con una busqueda valida por medio del query param', () => {
        const textSearch = 'man';
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q='+textSearch]}>
                <Route path="/search"
                    component={ ()=> <SearchScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        );

        const heroesResult = searchHeroes(textSearch);

        // console.log(`buscar man`, wrapper.html());
        expect(wrapper).toMatchSnapshot();

        // Verificar que el texto de la busqueda se muestre en la caja de texto
        expect(wrapper.find('input').prop('value')).toBe(textSearch);

        // Verifica que resultados sean: "Resultados encontrados (n)"
        expect(wrapper.find('.col-7').find('h4').text()).toBe(`Resultados encontrados (${ heroesResult.length })`);

        // Verifica quese halla renderizado el componente HeroeCard
        expect(wrapper.find('HeroeCard').exists()).toBe(true);

        // Verifica que se halla renderizado el componente HeroeCard (n) veces
        expect(wrapper.find('HeroeCard').length).toBe( heroesResult.length );

    });

    test('should mostrar el mensaje de No se encontraron heroes con ese criterio de busqueda "{ q }"', () => {
        const textSearch = 'manxyz';
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=' + textSearch]}>
                <Route path="/search"
                    component={ ()=> <SearchScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        );

        // console.log(`buscar man`, wrapper.html());
        // Verifica que resultados sean: "Resultados encontrados (0)"
        expect(wrapper.find('.col-7').find('h4').text()).toBe('Resultados encontrados (0)');

        // Verifica que resultados sean: 'No se encontraron heroes con ese criterio de busqueda "textSearch"'
        expect(wrapper.find('.alert-danger').exists()).toBe(true);        
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`No se encontraron heroes con ese criterio de busqueda "${ textSearch }"`);
    });

    test('should de llamar al history push al darle submit al formulario ', () => {
        const textSearch = 'green';
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=' + textSearch]}>
                <Route path="/search"
                    component={ ()=> <SearchScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        );

        const formValues = {
            target: {
                name: 'busquedaText', 
                value: textSearch
            }
        };

        // Simulamos poner un texto en el input usando simulate y mandando un parametro
        wrapper.find('input').simulate('change', { formValues });

        // Verificar que el texto de la busqueda se muestre en la caja de texto
        expect(wrapper.find('input').prop('value')).toBe(textSearch);
       
        // Simulamos el submit usando props y mandado un parametro
        wrapper.find('form').prop('onSubmit')({ preventDefault(){} });

        // console.log(`wrapper despues del submit`, wrapper.html());
        
        // Verificar que el push se halla llamado
        expect(historyMock.push).toHaveBeenCalled();
        
        // Varificar que el push halla sido llamado con el textSearch
        expect(historyMock.push).toHaveBeenCalledWith( '?q=' + textSearch );


    });
    
    
})
