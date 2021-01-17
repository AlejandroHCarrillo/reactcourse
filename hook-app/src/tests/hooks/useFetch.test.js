import { renderHook, act} from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('Probar hook useFetch', () => {
    test('should traer la informacion por default', () => {
        // const { data } = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);
        // {data:null, loading:false, error:null}

        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1' ) );

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);

    });

    // useFetch regresa una promesa, por lo que demos poner async
    test('should de obtener datos', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1' ) );
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current;

        // console.log(data);

        expect(data).not.toBe(null);
        expect(data.length).toBe(1);

        expect(loading).toBe(false);
        expect(error).toBe(null);

    });

    // useFetch regresa una promesa, por lo que demos poner async
    test('should de manejar el error', async() => {
            const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apix/users?page=2' ) );
            await waitForNextUpdate();
            
            const { data, loading, error } = result.current;
    
            console.log(result.current);
    
            expect(data).toBe(null);
            expect(loading).toBe(false);
            expect(error).toBe('Error al cargar la info');
    
        })
    
    
    
})
