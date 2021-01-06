import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('puebas al componente principal GifExpertApp', () => {
    test('should mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    })

    test('should mostrarse correctamente', () => {
        const categories = ['batman', 'superman'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories } />);
        expect( wrapper ).toMatchSnapshot();
        
        // Verificamos que se renderizen 2 grids en el html, uno por cada elemento del arreglo de categorias
        const grids = wrapper.find('GifGrid');
        expect( grids.length ).toBe( categories.length );

    })

})
