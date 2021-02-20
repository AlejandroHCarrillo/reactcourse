import { renderHook, act} from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'Alejandro',
        email: 'alex@hotmail.com'
    };

    test('should regresar el formulario por default', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        
        // console.log(result.current);
       
        // expect( result.current[0] ).toEqual(initialForm);
        // expect( typeof(result.current[1]) ).toBe('function');
        // expect( typeof(result.current[2]) ).toBe('function');


        // *** Usando desestructuracion de arreglos ***
        const [formValues, handleInputChange, reset] = result.current;
        expect( formValues ).toEqual(initialForm);
        expect( typeof(handleInputChange) ).toBe('function');
        expect( typeof(reset) ).toBe('function');

    });

    test('should cambiar el contenido del name del formulario', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        
        console.log(result.current);
        const [, handleInputChange] = result.current;

        act(()=>{
            // al input le mandamos un objeto con otro objeto dentro con los valores del formulario
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Alex'
                }
            });
        });

        const [formValues ] = result.current;

        console.log(formValues);

        expect( formValues ).toEqual({
            ...initialForm,
            name: 'Alex'
        });    
            
    });

    test('should cambiar el contenido del name del formulario y resetearlo', () => {
        const { result } = renderHook( () => useForm( initialForm ) );
        
        console.log(result.current);
        const [, handleInputChange, reset] = result.current;

        act(()=>{
            // al input le mandamos un objeto con otro objeto dentro con los valores del formulario
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Alex'
                }
            });
        });

        // const [ formValues ] = result.current;
        
        act(()=>{
            reset();
        });

        const [ formValues ] = result.current;

        // console.log(formValues);

        expect( formValues ).toEqual( initialForm );

    });
    
    
    
})
