import { renderHook, act} from "@testing-library/react-hooks"
import { useCounter } from "../../hooks/useCounter"

describe('Pruebas al hook useCounter', () => {
    test('should de regresar los valores por default', () => {
        const { result } = renderHook( () => useCounter() );
        // console.log(result.current);
       
        expect( result.current.counter ).toBe(10);
        expect( typeof(result.current.increment) ).toBe('function');
        expect( typeof(result.current.decrement) ).toBe('function');
        expect( typeof(result.current.reset) ).toBe('function');

    });

    test('should de inicializar el contador en 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        // console.log(result.current);
       
        expect( result.current.counter ).toBe(100);
    });

    test('should incrementar el contador ', () => {
        const { result } = renderHook( () => useCounter(0) );        
        // console.log(result.current);
        const increment = result.current.increment;

        act(()=>{
            increment();
        });
       
        expect( result.current.counter ).toBe(1);
        
    });

    test('should decrementar el contador ', () => {
        const { result } = renderHook( () => useCounter(1) );        
        // console.log(result.current);
        const decrement = result.current.decrement;

        act(()=>{
            decrement();
        });
       
        expect( result.current.counter ).toBe(0);
        
    });

    test('should resetear el contador ', () => {
        const { result } = renderHook( () => useCounter(1) );        
        // console.log(result.current);
        const increment = result.current.increment;
        const reset = result.current.reset;

        act(()=>{
            increment();
            reset();
        });
       
        expect( result.current.counter ).toBe(1);
        
    })


    

})
