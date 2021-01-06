import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('probando el hook personalizado useFetchGifs', () => {
    test('should de retornar el estado inicial', async() => {
        // Ejecutamos el hook por medio de renderhook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('batman') );

        // Para obtener la data y el estado del loading
        // des estructuramos la propiedad current del result  
        const { data, loading } = result.current;
        
        // Disparamos los cambios, usando async and await
        await waitForNextUpdate();

        // console.log(result);
        // console.log(data, loading);

        // Verificamos que la data sea un arreglo vacio
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    });

    test('should de contener imagenes y el loading en falso', async() => {
        // Ejecutamos el hook por medio de renderhook pero
        // agregamos waitForMextUpdate para obtener los resultados posteriores
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('batman') );
        
        // Disparamos los cambios, usando async and await
        await waitForNextUpdate();

        // Para obtener la data y el estado del loading
        // des estructuramos la propiedad current del result  
        const { data, loading } = result.current;

        // Verificamos que la data sea un arreglo vacio
        expect(data).not.toEqual([]);
        expect(loading).toBeFalsy();
        
    })
    
    
})
