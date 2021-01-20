import React from 'react';
import { mount } from "enzyme"
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';
import { getHeroeById } from '../../../components/selectors/getHeroById';

describe('Pruebas al HeroeScreen', () => {
    const heroeTest = getHeroeById('dc-wonder');

    // Creamos un mock del history para verificar que las funciones sean llamadas
    // y comprobar las paginas visitadas recientemente
    const historyMock = {
        length : 10,
        push : jest.fn(),
        goBack : jest.fn(),
    }

    test('should mostrar el componente de redireccion si no tiene argumentos la url (/hero)', () => {
        // Simulamos envio de parametros usando initial entries en el memory        
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/heroe/${heroeTest.id}`]}>
                <HeroScreen history={historyMock} />
            </MemoryRouter>
        );

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('should mostar el componente con la informacion del hero cuando esta exista y sea valida', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/' + heroeTest.id]}>
                <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect(wrapper.find('.card-title').text().trim()).toBe( heroeTest.superhero );
    });

    // Probando el boton de regresar
    test('cuando history.length es menor a 2 should de regresar a Home usando PUSH', () => {
        const historyMock = {
            length : 1,
            push : jest.fn(),
            goBack : jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/' + heroeTest.id]}>
                <Route exact path="/heroe/:heroeId" 
                    component={ ()=> <HeroScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        );

        // console.log(wrapper.html());

        // Simulamos hacer clicke en ele boton
        // wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/home');
        expect(historyMock.goBack).not.toHaveBeenCalled();

    });
    
    // Probando el boton de regresar
    test('cuando la history es mayor a 2 should de regresar a la pantalla anterior con PUSH', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/' + heroeTest.id]}>
                <Route exact path="/heroe/:heroeId" 
                    component={ ()=> <HeroScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.goBack).toHaveBeenCalled();
        expect(historyMock.push).not.toHaveBeenCalled();

    });

    // Probando el boton de regresar
    test('should de regresar un string vacio cuando la ruta no es valida', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/xyz']}>
                <Route exact path="/heroe/:heroeId" 
                    component={ ()=> <HeroScreen history={ historyMock }/> } 
                />
            </MemoryRouter>
        );

        // console.log(wrapper.html());
        expect(wrapper.text()).toBe('');
    });
    
    

    

})
