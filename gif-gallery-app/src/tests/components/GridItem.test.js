import { react } from 'react'
import { shallow } from "enzyme"
import { GridItem } from "../../components/GridItem"

describe('probando el GridItem', () => {
    
    const title = "titulo";
    const url = "https://fakeurl.com/notfound.jpg"
    
    const wrapper = shallow(< GridItem title={title} url={url} />);
    
    test('should show the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
        // toMatchSnapshot verifica que la renderizacion contenida en el wrapper 
        // sea igual a la guardada anteriormente
        // En caso de que halla cambios, hay que revisar si estos cambios son esperados
        // en caso de que no sean esperados revisar que cambio
        // en caso de ser cambios esperados actualizar el snapshot gurdado apretando "u" en el menu de opciones
    });

    test('should contains a pharagraph with the title', () => {
        const p = wrapper.find('p');
        // console.log(p.html());
        expect(p.text().trim()).toBe(title);
    });
    
    test('should contains an image with src as url and alt as title', () => {
        // Ejemplo de como verificar las propiedades de un elemento del HTML
        const i = wrapper.find('img');
        // console.log(i.html());
        // console.log(i.props());
        expect(i.prop('src')).toBe(url);
        expect(i.prop('alt')).toBe(title);
    });
    
    test('should verify the div contains the class animate__fadeIn', () => {
        // Ejemplo de como verificar las propiedades de un elemento del HTML
        const classExpected = "animate__fadeIn";
        const div = wrapper.find('div');
        // console.log(i.html());
        const cn = div.prop('className');

        expect( cn.includes(classExpected) ).toBe( true );

        
    })
    

})
