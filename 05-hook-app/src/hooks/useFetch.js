import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({ data: null, loading: true, error: null });
    // creamos una referencia para saber si el componente esta montado
    const isMounted = useRef(true);

    // creamos un efecto que solo se dispara al inicio, 
    // pero al destruirse cambie la referencia de montado a false
    useEffect(() => {
        // Effect
        // No hace nada 
        return () => {
        // referencia  isMontado a false
            isMounted.current = false;    
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
        .then(resp => resp.json() )
        .then(data => {

            // console.log("El componente esta montado: ", isMounted.current);
            // console.log("iniciando espera");                
            // // Colocamos un timeout para simular un tiempo de carga de 2s
            // setTimeout(() => {
                if (isMounted.current){
                    // console.log("Ya llegaron lo datos", data);
                    setState({
                        loading: false,
                        error: null,
                        data
                    });                
                } else{          
                    console.log("Componente no esta montado y el use state no se llamó");
                }
            // }, 4000);

        }).catch(()=>{
            setState({
                data: null,
                loading: false,
                error: "Error al cargar la info"
            });
        });

    }, [url])
    
    
    return state;
}
