import { getSaludo } from "../base/02-template-string"
import '@testing-library/jest-dom';

describe('Pruebas de strings en 02-template-string', ()=>{
    test('getSaludo debe regresar Hola Alejandro', () => {
        const nombre = 'Alejandro';
        const saludo = getSaludo(nombre);

        expect ( saludo ).toBe( 'Hola ' + nombre );
    })

    // Probar getSaludo Sin parametro, Debe regresar Hola Clark
    test('getSaludo debe regresar Hola Clark', () => {

        const saludo = getSaludo();

        expect ( saludo ).toBe( 'Hola Clark' );
    })

    

})